var systemDB;
var dataset;
let isTrue = true;

var id;

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
    insertDB(systemDB,
        "라라랜드","2016","드라마","다미엔 차젤레","엠마 스톤|라이언 고슬링","https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg?type=m665_443_2","#a293d0","#4426a0","#4426a0","#46388d","#46388d","https://www.youtube.com/embed/Dt5hFexM5BI");						
    insertDB(systemDB,
        "날씨의 아이","2019","애니메이션","신카이 마코토","모리시마 호다카|아마노 히나","https://movie-phinf.pstatic.net/20200515_153/1589521029136pyDNk_JPEG/movie_image.jpg?type=f172_234","#a08190","#2b729c","#adb6bd","#e5c2e2","#f6c978","https://www.youtube.com/embed/ILQl1Q4jizc");
        insertDB(systemDB,
            "코코","2018","애니메이션/모험/코미디","리 언크리치","벤자민 브랫|가엘 가르시아 베르날|안소니 곤잘레스|"
            ,"https://movie-phinf.pstatic.net/20171222_56/1513906341368blx3Q_JPEG/movie_image.jpg","#732f6a","#543e53","#6da0d5","#1c296f","#e48780","https://www.youtube.com/embed/LmS5KMJTWlA");
            insertDB(systemDB,
                "파이브 피트","2019","드라마/멜로/로맨스","저스틴 밸도니","헤일리 루 리차드슨|콜 스프로즈|","https://movie-phinf.pstatic.net/20190405_72/155444000594589QMA_JPEG/movie_image.jpg?type=m665_443_2","#d5d3f0","#c5b3dd","#6aa0cf","#5598cc","#888fb9","https://www.youtube.com/embed/vMd2lBZcTOM");
            insertDB(systemDB,
                "리틀 포레스트","2014","드라마","모리 준이치","하시모토 아이|마츠오카 마유|누쿠미즈 요이치|키리시마 카렌|미우라 타카히로|","https://movie-phinf.pstatic.net/20150114_206/1421200132061BpI2D_JPEG/movie_image.jpg","#d2a02d","#be8b5e","#e3be39","#e6c23a","#d3c62c","https://www.youtube.com/embed/5fcDvt6jtEA");
            insertDB(systemDB,
            "돈","2019","범죄","박누리","류준열|유지태|조우진","https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg?type=m665_443_2","#94b27c","#b3c2ad","#54623e","#265221","#153408","https://www.youtube.com/embed/wD8yeua-AnA");
            insertDB(systemDB,
            "마담 프루스트의 비밀정원","2013","드라마","실뱅 쇼메","귀욤 고익스|앤 르 니|베르나데트 라퐁|헬렌 벤상|","https://movie-phinf.pstatic.net/20190712_55/15628945961130s231_JPEG/movie_image.jpg","#506429","#435024","#8b6b3c","#63bca0","#455622","https://www.youtube.com/embed/SXXn84-1hjE");
            insertDB(systemDB,
            "나는 내일, 어제의 너와 만난다","2017","멜로/로맨스/판타지","미키 타카히로","후쿠시 소우타|고마츠 나나|","https://movie-phinf.pstatic.net/20170906_281/1504661660780autBq_JPEG/movie_image.jpg?type=m665_443_2","#fff3ff","#c3c2da","#b6c5af","#fdbb31","#819a56","https://www.youtube.com/embed/XEmXrbvaRZM");
            insertDB(systemDB,
            "시동","2019","드라마","최정열","마동석|박정민|정해인|염정아|최성은|","https://upload.wikimedia.org/wikipedia/ko/5/57/%EC%8B%9C%EB%8F%99_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg","#32b1d2","#dd343b","#48790c","#0285ef","#e3c1dc","https://www.youtube.com/embed/hKlpat_0IF0");
            insertDB(systemDB,
            "아이 필 프리티","2018","코미디","에비 콘|마크 실버스테인","에이미 슈머|미셸 윌리엄스| 로리 스코벨| 톰 호퍼| 로렌 허튼","https://movie-phinf.pstatic.net/20180601_276/1527835091787c3BdN_JPEG/movie_image.jpg?type=f172_234","#d00508","#e69290","#c80c0a","#e48685","#3b3a38","https://www.youtube.com/embed/5xM5KSQxMeo");
            insertDB(systemDB,
            "어바웃 타임","2013","로맨스/코미디","리차드 커티스","돔놀 글리슨|레이첼 맥아담스","https://movie-phinf.pstatic.net/20131115_243/1384498185621awKv1_JPEG/movie_image.jpg?type=f172_234","#ab1919","#d58c8c","#fab9a5","#8ba34f","#bb2d23","https://www.youtube.com/embed/tnyWkyDGWuM");
            insertDB(systemDB,
            "데드풀","2016","액션","팀 밀러","라이언 레이놀즈","https://movie-phinf.pstatic.net/20160219_61/1455872433882gKqgb_JPEG/movie_image.jpg","#972a3d","#000002","#a22640","#3c3b49","#94939a","https://www.youtube.com/embed/AubJhjH0MfY");
            insertDB(systemDB,
            "헝거게임 : 판엠의 불꽃","2012","액션/드라마/SF","게리 로스","제니퍼 로렌스|조쉬 허처슨|리암 헴스워스|엘리자베스 뱅크스|우디 해럴슨|스탠리 투치|","https://movie-phinf.pstatic.net/20120402_160/13333531264854NQHB_JPEG/movie_image.jpg","#9a2c00","#520805","#4a0f09","#bc7d13","#944413","https://www.youtube.com/embed/9pfVCKaheGQ");
            insertDB(systemDB,
            "인턴","2015","코미디","낸시 마이어스","로버트 드 니로|앤 해서웨이|","https://movie-phinf.pstatic.net/20150910_279/1441866003899BJKw7_JPEG/movie_image.jpg","#5c0108","#968976","#001231","#1d436a","#960818","https://www.youtube.com/embed/bwylOLy5ir0");
            insertDB(systemDB,
            "업","2009","애니메이션|가족|모험|코미디|액션","피트 닥터|밥 피터슨","에드워드 애스너| 조던 나가이| 크리스토퍼 플러머| 밥 피터슨","https://movie-phinf.pstatic.net/20111223_221/1324590426566npnJd_JPEG/movie_image.jpg?type=m665_443_2","#458bc7","#7fa7cb","#ececec","#aa9faa","#65a1d5","https://www.youtube.com/embed/551YG0kBQks");
            insertDB(systemDB,
            "주먹왕 랄프","2012","애니메이션|코미디|가족","리치 무어","제인 린치| 존 C. 레일리| 잭 맥브레이어| 정준하","https://movie-phinf.pstatic.net/20121123_34/1353646026595Ju6dI_JPEG/movie_image.jpg?type=m665_443_2","#cf4636","#b36b9b","#0f2557","#b94165","#93d5f5","https://www.youtube.com/embed/wErk0gZpq38");
            insertDB(systemDB,
            "토이 스토리4","2019","애니메이션/모험/코미디/가족/판타지","조시 쿨리","톰 행크스|팀 알렌|애니 파츠|토니 헤일","https://movie-phinf.pstatic.net/20190611_117/1560221190708y3bbv_JPEG/movie_image.jpg?type=m665_443_2","#cbd8e1","#4883bb","#c8b733","#393f59","#000002","https://www.youtube.com/embed/u8GQibRXVHg");
            insertDB(systemDB,
            "인사이드 아웃","2015","애니메이션/코미디","피트 닥터","에이미 포엘러|필리스 스미스|민디 캘링|빌 헤이더|루이스 블랙|케이틀린 디아스|카일 맥라클란|다이안 레인|","https://movie-phinf.pstatic.net/20150714_216/14368354197498c2rS_JPEG/movie_image.jpg?type=m665_443_2","#f9b842","#7a1863","#00a64e","#040241","#05004b","https://www.youtube.com/embed/1KGZtWbZtq8");
            insertDB(systemDB,
            "주토피아","2016","애니메이션/액션/모험/코미디/가족","바이론 하워드, 리치무어","지니퍼 굿윈|제이슨 베이트먼|알란 터딕|이드리스 엘바|J.K. 시몬스","https://movie-phinf.pstatic.net/20160217_153/1455686083975zjajH_JPEG/movie_image.jpg?type=m665_443_2","#ebffff","#e5c094","#82d6fa","#7474a6","#2a171d","https://www.youtube.com/embed/RGucZx3TUnc");
            insertDB(systemDB,
            "러브 액츄얼리","2003","멜로/로맨스/드라마/코미디","리차드 커티스","휴 그랜트|콜린 퍼스|리암 니슨|키이라 나이틀리|엠마 톰슨|앨런 릭먼|빌 나이|로라 리니|마틴 맥커친|","https://movie-phinf.pstatic.net/20191202_278/1575250003279Taafr_JPEG/movie_image.jpg","#c01d22","#7f181b","#ba5c5c","#7e1117","#9a1c1f","https://www.youtube.com/embed/7w-FtQ2Ak_o");
            insertDB(systemDB,
            "500일의 썸머","2009","드라마/멜로/로맨스","마크 웹","조셉 고든 레빗|주이 디샤넬|","https://movie-phinf.pstatic.net/20210521_40/1621587883416Xe5Lu_JPEG/movie_image.jpg","#f8e8e9","#f8dde4","#f2d1da","#e9c1ca","#e0b5c8","https://www.youtube.com/embed/m5bHFoU4F0w");
            insertDB(systemDB,
            "장난스런 키스","2019","멜로/로맨스","프랭키 첸","왕대륙|임윤|","https://movie-phinf.pstatic.net/20190305_257/1551749723722A0Gw5_JPEG/movie_image.jpg?type=m665_443_2","#ecf2f2","#a0c1ac","#7da187","#f4303e","#2454ba","https://www.youtube.com/embed/F1Y44svLimU");
            insertDB(systemDB,
            "잭 스나이더의 저스티스 리그","2021","액션/모험/판타지/SF","잭 스나이더","벤 애플렉|헨리 카빌|갤 가돗|제이슨 모모아|에즈라 밀러|레이 피셔|","https://movie-phinf.pstatic.net/20210319_251/1616118380277ezJm4_JPEG/movie_image.jpg?type=m665_443_2","#cbcbce","#96979c","#535459","#343539","#020202","https://www.youtube.com/embed/keGpIonTbpg");
            insertDB(systemDB,
            "악인전","2019","범죄/액션","이원태","마동석|김무열|김성규|","https://movie-phinf.pstatic.net/20190515_203/1557888285764Rvouz_JPEG/movie_image.jpg","#35354d","#181b2a","#282b34","#80abb2","#0e0e0e","https://www.youtube.com/embed/UmebAbuTfXI");
            insertDB(systemDB,
            "존 윅 - 리로드","2017","액션/범죄/스릴러","채드 스타헬스키","키아누 리브스","https://movie-phinf.pstatic.net/20200807_193/1596789703698oLgpX_JPEG/movie_image.jpg","#6d6e72","#47545c","#000004","#27343c","#27343c","https://www.youtube.com/embed/qtIaqB1h37A");
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

//idx 이용해 영화 데이터 불러오기
function getData(idx){
    db = systemDB
    var strSql = "SELECT * FROM movie_board WHERE idx = ?"; 
    db.transaction(function (tx) { 
        tx.executeSql(strSql, [idx], function (tx, result) { 
            dataset = result.rows; 
            if (dataset.length > 0) {
                for (var i = 0, item = null; i < dataset.length; i++) { 
                    item = dataset.item(i); 
                    $("#title").html(item['title']); 
                    $("#year").html(item['pubDate']); 
                    document.getElementById("img").src = item['img'];   
                    $('#url').attr('src', item['url']); 
                    //$("#url").src(item['url']);  
                    //$("#img").attr("src",item['img']);            
                    $("#genre").html(item['genre']);             
                    $("#actor").html(item['actor']);
                    $("#color1").css("background-color",item['color1']);       
                    $("#color2").css("background-color",item['color2']); 
                    $("#color3").css("background-color",item['color3']); 
                    $("#color4").css("background-color",item['color4']); 
                    $("#color5").css("background-color",item['color5']); 
                    $("#color6").css("background-color",item['color1']); 
                }
            } else {
                console.log("데이터 리스트 없음");
            }
        }); 
    }); 
}

function getSunny(idx,j){    //맑은날 로맨스 영화 로드
    db = systemDB
    var titleId;
    var imgId;

    titleId = String(j)+"_title";
        imgId = String(j)+"_img";

        var strSql = "SELECT * FROM movie_board WHERE idx = ?"; 
        db.transaction(function (tx) { 
            tx.executeSql(strSql, [idx], function (tx, result) { 
                dataset = result.rows; 
                if (dataset.length > 0) {
                    for (var i = 0, item = null; i < dataset.length; i++) { 
                        item = dataset.item(i); 
                        //$(thumbId).src = item['img'];  
                        document.getElementById(imgId).src = item['img']; 
                        document.getElementById(titleId).innerHTML = item['title'];             
                    }
                } else {
                    console.log("데이터 리스트 없음");
                }
            }); 
        }); 

}

function getCloudy(idx,j){    //흐린날 우중충한 영화 로드
    db = systemDB
    var titleId;
    var imgId;
    
    titleId = String(j)+"_title";
        imgId = String(j)+"_img";

        var strSql = "SELECT * FROM movie_board WHERE idx = ?"; 
        db.transaction(function (tx) { 
            tx.executeSql(strSql, [idx], function (tx, result) { 
                dataset = result.rows; 
                if (dataset.length > 0) {
                    for (var i = 0, item = null; i < dataset.length; i++) { 
                        item = dataset.item(i); 
                        //$(thumbId).src = item['img'];  
                        document.getElementById(imgId).src = item['img']; 
                        document.getElementById(titleId).innerHTML = item['title'];   
                        document.getElementById(imgId).onclick = function(){
                            localStorage.setItem('idx',idx);
                        }
                    }
                } else {
                    console.log("데이터 리스트 없음");
                }
            }); 
        }); 
}
