var systemDB;
var dataset;
let isTrue = true;

//parseData(1);

init();

function parseData(no){

    d3.csv("https://raw.githubusercontent.com/Comma-bb/Comma_frontend/master/movie_data.csv"
        , function(data) {
        document.getElementById(String(no)+"_title").innerHTML = data[no].title;
        document.getElementById(String(no)+"_img").src = data[no].image;
    });
}
//초기에 모든 데이터 셋팅..
function setData(){
    insertDB(systemDB,
        "너의 이름은.","2017","드라마","신카이 마코토","지창욱|김소현|이레|카미키 류노스케|카미시라이시 모네|타니 카논","https://movie-phinf.pstatic.net/20171222_70/1513920001726sikUX_JPEG/movie_image.jpg?type=f172_234","#df9bb0","#df9bb0","#9b8f9a","#5d6596","#c8b6c3","https://www.youtube.com/embed/enRm-9qF2L8");
}

function init(){
    if (!window.openDatabase) { 
        alert("현재 브라우저는 Web SQL Database를 지원하지 않습니다");
    } else {
        var shortName = 'Movie1';
        var version = '1.0';
        var displayName = 'Movie DB';
        var maxSize = 1024 * 64; // in bytes
        var db = openDatabase(shortName, version, displayName, maxSize);
    }  
                
    createTable(db);
    systemDB = db; 

    setData();
}

function createTable(db) {
    var strCreate = "CREATE TABLE IF NOT EXISTS movie_board"
                        + " (idx INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                        + " title TEXT NOT NULL,"
                        + " pubDate INTEGER NOT NULL,"
                        + " genre TEXT NOT NULL,"
                        + " director TEXT NOT NULL,"
                        + " actor TEXT NOT NULL,"
                        + " img TEXT NOT NULL,"
                        + " color1 TEXT NOT NULL,"
                        + " color2 TEXT NOT NULL,"
                        + " color3 TEXT NOT NULL,"
                        + " color4 TEXT NOT NULL,"
                        + " color5 TEXT NOT NULL,"
                        + " url TEXT NOT NULL)";
    db.transaction(function (tx) { 
        tx.executeSql(strCreate);    
    });
}

function checkDB(db,title){
    isTrue = true;
    var check = "select 1 from movie_board WHERE title = ?";
    console.log("checkDB 들어옴");

    //같은 이름 존재 하는 경우 어떻게 알지 
    db.transaction(function (tx) { 
        tx.executeSql(check, [title], function (tx, result) { 
            dataset = result.rows;
            console.log(dataset);
            if(dataset.length>0){
                console.log("같은 이름 존재");
                // dropTable(db);
                isTrue = false;
            }
            else{
                console.log("같은 이름 없음");
                isTrue = true;
            }
        }); 
    }); 
}

function insertDB(db, title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url) {
    
    //DB에 title 존재하는지 확인 
    //isTrue = true
    checkDB(db,title);

    setTimeout(function(){
        if(isTrue){
            console.log("같은 이름 존재하지 않음");
        }
        else{
            console.log("같은 이름 존재 하는 경우");
            console.log("insert  취소");
            return;
        }
        
        var strSql = "INSERT INTO movie_board (title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5, url) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"; 
    
        db.transaction(function (tx) { 
            tx.executeSql(strSql, [title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url]);
        });
    },100);
}

//임시로 idx로 영화제목만 가져오기 -> 나중에 컬럼 한번에 가져올꺼임!~!
function getTitle(){
    console.log("getTitle()들어옴");
    var title;
    var strSql = "SELECT title FROM movie_board WHERE idx = ?"; 
    systemDB.transaction(function (tx) { 
        tx.executeSql(strSql, [1], function (tx, result) { 
            dataset = result.rows;
            if(dataset.length > 0){
                item = dataset.item(0);
                title = String(item['title']);
                console.log("get에서 확인1: "+title);
            }     
        });
    });
    setTimeout(function(){
        console.log("get에서 확인2: "+title);
        return title;
    },300);
}

function selectAllList() { 
    db = systemDB
    var strSql = "SELECT * FROM movie_board"; 
    db.transaction(function (tx) { 
        tx.executeSql(strSql, [], function (tx, result) { 
            dataset = result.rows; 
            var str = "<ol>";
            if (dataset.length > 0) {
                for (var i = 0, item = null; i < dataset.length; i++) { 
                    item = dataset.item(i); 
                    str += "<li>"+item['title']+ "</li>";                 
                }
            } else {
                str += "리스트가 없습니다.";
            }
            str += "</ol>";  
            $("#title").html(str);
        }); 
    }); 
}

// 테이블 삭제
function dropTable(db) { 
    if (!confirm("테이블 삭제 하시겠습니까?")) {
        return;    
    }
    
    var strSql = "DROP TABLE movie_board"; 
    db.transaction(function (tx) { 
        tx.executeSql(strSql, []); 
    }); 
    console.log("dropTable");
    setTimeout(selectAllList,1000);
    // selectAllList();
}