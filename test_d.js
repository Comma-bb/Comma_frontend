function MovieList(idx){
    db = systemDB
    var strSql = "SELECT * FROM movie_board WHERE idx = ?"; 
    db.transaction(function (tx) { 
        tx.executeSql(strSql, [idx], function (tx, result) { 
            dataset = result.rows; 
            // var str = "<ul>";
            if (dataset.length > 0) {
                for (var i = 0, item = null; i < dataset.length; i++) { 
                    item = dataset.item(i); 
                    title = item['title'];
                    director = item['director'];
                    actor = item['actor'];
                    image = item['img'];

                    console.log(item,title,director,actor);
                }
            } else {
                str += "리스트가 없습니다.";
            }
            // $("#title").html(str);
        }); 
    }); 
}