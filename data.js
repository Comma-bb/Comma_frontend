var systemDB;
var dataset;

init();

//초기에 모든 데이터 셋팅..
function setData(){
    insertDB(systemDB
        ,"나의 소녀시대"
        ,2016
        ,"멜로/로맨스"
        ,"프랭키 첸"
        ,"왕대륙"
        ,"https://movie-phinf.pstatic.net/20200810_138/1597023139385oXMsi_JPEG/movie_image.jpg?type=m665_443_2"
        ,"#dde0f3"
        ,"#a7caf4"
        ,"#949375"
        ,"#5d5f47"
        ,"#efc9b4"
        ,"https://www.youtube.com/embed/XupP-C_1JLo"
    );
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

function insertDB(db, title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url) {
    var strSql = "INSERT INTO movie_board (title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5, url) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"; 

    db.transaction(function (tx) { 
        tx.executeSql(strSql, [title, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url]);
    });
}

//임시로 udx로 영화제목만 가져오기 -> 나중에 컬럼 한번에 가져올꺼임!~!
function getTitle(){
    console.log("getTitle 들어옴");
    var strSql = "SELECT title FROM movie_board WHERE idx = ?"; 
    systemDB.transaction(function (tx) { 
        tx.executeSql(strSql, [1], function (tx, result) { 
            dataset = result.rows;
            if(dataset.length > 0){
                item = dataset.item(0);
                return item['title'];
            }      
        });
    });
}