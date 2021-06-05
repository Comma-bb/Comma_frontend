var systemDB;
var dataset;
let isTrue = true;
var len;

var id;

init();

//초기에 모든 데이터 셋팅..
function setData(){
    insertDB(systemDB,
        "너의 이름은.","《너의 이름은.》은 2016년 공개된 신카이 마코토 감독의 일본 애니메이션 로맨스 판타지 드라마 영화이다. 코믹스 웨이브 필름 제작 작품. 이 영화는 일본 시골의 여고생과 도쿄의 남고생의 몸이 서로 바뀌는 이야기를 다룬다.","2017","드라마","신카이 마코토","지창욱|김소현|이레|카미키 류노스케|카미시라이시 모네|타니 카논","https://movie-phinf.pstatic.net/20171222_70/1513920001726sikUX_JPEG/movie_image.jpg?type=f172_234","#df9bb0","#886d8c","#9b8f9a","#5d6596","#c8b6c3","https://www.youtube.com/embed/enRm-9qF2L8");
    insertDB(systemDB,
        "라라랜드","꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.","2016","드라마","다미엔 차젤레","엠마 스톤|라이언 고슬링","https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg?type=m665_443_2","#a293d0","#4426a0","#4426a0","#46388d","#46388d","https://www.youtube.com/embed/Dt5hFexM5BI");						
    insertDB(systemDB,
        "날씨의 아이","“이제 비는 그치고, 우리의 세상이 빛나기 시작할 거야”비가 그치지 않던 어느 여름날,가출 소년 ‘호다카’는 수상한 잡지사에 취직하게 되고비밀스러운 소녀 ‘히나’를 우연히 만난다.“지금부터 하늘이 맑아질 거야”그녀의 기도에 거짓말 같이 빗줄기는 멈추고,사람들의 얼굴에 환한 빛이 내려온다.“신기해, 날씨 하나에 사람들의 감정이 이렇게나 움직이다니”하지만, 맑음 뒤 흐림이 찾아오듯두 사람은 엄청난 세계의 비밀을 마주하게 되는데…흐리기만 했던 세상이 빛나기 시작했고, 그 끝에는 네가 있었다.","2019","애니메이션","신카이 마코토","모리시마 호다카|아마노 히나","https://movie-phinf.pstatic.net/20200515_153/1589521029136pyDNk_JPEG/movie_image.jpg?type=f172_234","#a08190","#2b729c","#adb6bd","#e5c2e2","#f6c978","https://www.youtube.com/embed/ILQl1Q4jizc");
    insertDB(systemDB,
        "코코","뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다.그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데…과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?","2018","애니메이션/모험/코미디","리 언크리치","벤자민 브랫|가엘 가르시아 베르날|안소니 곤잘레스|","https://movie-phinf.pstatic.net/20171222_56/1513906341368blx3Q_JPEG/movie_image.jpg","#732f6a","#543e53","#6da0d5","#1c296f","#e48780","https://www.youtube.com/embed/LmS5KMJTWlA");
    insertDB(systemDB,
        "파이브 피트","같은 병을 가진 사람끼리 6피트 이하 접근해서도, 접촉도 해선 안되는CF(낭포성 섬유증)를 가진 ‘스텔라’와 ‘윌’첫눈에 반한 두 사람은 서로를 위해 안전거리를 유지하려고 하지만 그럴수록 더욱 빠져든다.손을 잡을 수도 키스를 할 수도 없는 그들은병 때문에 지켜야 했던 6피트에서 1피트 더 가까워지는 걸 선택하고처음으로 용기를 내 병원 밖 데이트를 결심한다.그러나 갑자기 숨을 쉬지 못하는 ‘스텔라’.‘윌’은 그녀를 살리기 위해 안전거리를 어기게 되는데...","2019","드라마/멜로/로맨스","저스틴 밸도니","헤일리 루 리차드슨|콜 스프로즈|","https://movie-phinf.pstatic.net/20190405_72/155444000594589QMA_JPEG/movie_image.jpg?type=m665_443_2","#d5d3f0","#c5b3dd","#6aa0cf","#5598cc","#888fb9","https://www.youtube.com/embed/vMd2lBZcTOM");
    insertDB(systemDB,
        "리틀 포레스트","시험, 연애, 취업… 뭐하나 뜻대로 되지 않는 일상을 잠시 멈추고고향으로 돌아온 혜원은 오랜 친구인 재하와 은숙을 만난다남들과는 다른, 자신만의 삶을 살기 위해 고향으로 돌아온 ‘재하’,평범한 일상에서의 일탈을 꿈꾸는 ‘은숙’과 함께직접 키운 농작물로 한끼 한끼를 만들어 먹으며겨울에서 봄, 그리고 여름, 가을을 보내고 다시 겨울을 맞이하게 된 혜원.그렇게 특별한 사계절을 보내며 고향으로 돌아온 진짜 이유를 깨닫게 된 혜원은새로운 봄을 맞이하기 위한 첫 발을 내딛는데…","2014","드라마","모리 준이치","하시모토 아이|마츠오카 마유|누쿠미즈 요이치|키리시마 카렌|미우라 타카히로|","https://movie-phinf.pstatic.net/20150114_206/1421200132061BpI2D_JPEG/movie_image.jpg","#d2a02d","#be8b5e","#e3be39","#e6c23a","#d3c62c","https://www.youtube.com/embed/5fcDvt6jtEA");
    insertDB(systemDB,
        "돈","오직 부자가 되고 싶은 꿈을 품고 여의도 증권가에 입성한 신입 주식 브로커 조일현(류준열).빽도 줄도 없는, 수수료 O원의 그는 곧 해고 직전의 처지로 몰린다.위기의 순간, 베일에 싸인 신화적인 작전 설계자 번호표(유지태)를 만나게 되고,막대한 이익을 챙길 수 있는 거래 참여를 제안 받는다.위험한 제안을 받아들인 후 순식간에 큰 돈을 벌게 되는 일현.승승장구하는 일현 앞에 번호표의 뒤를 쫓던 금융감독원의 사냥개 한지철(조우진)이 나타나 그를 조여 오기 시작하는데…","2019","범죄","박누리","류준열|유지태|조우진","https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg?type=m665_443_2","#94b27c","#b3c2ad","#54623e","#265221","#153408","https://www.youtube.com/embed/wD8yeua-AnA");
    insertDB(systemDB,
        "마담 프루스트의 비밀정원","어릴 적에 부모를 여읜 폴은 말을 잃은 채 두 이모와 함께 산다. 이모들은 폴을 세계적인 피아니스트로 만들려고 했지만 33살의 폴은 댄스교습소에서 피아노 연주를 하는 것이 전부이다. 그러던 어느 날 우연히 이웃 마담 프루스트의 집을 방문한 폴은 그녀가 키우는 작물을 먹고 과거의 상처와 추억을 떠올리게 되는데…","2013","드라마","실뱅 쇼메","귀욤 고익스|앤 르 니|베르나데트 라퐁|헬렌 벤상|","https://movie-phinf.pstatic.net/20190712_55/15628945961130s231_JPEG/movie_image.jpg","#506429","#435024","#8b6b3c","#63bca0","#455622","https://www.youtube.com/embed/SXXn84-1hjE");
    insertDB(systemDB,
        "나는 내일, 어제의 너와 만난다","스무 살의 ‘타카토시’는 지하철에서 우연히 만난‘에미’를 보고 순식간에 마음을 빼앗긴다. 운명 같은 끌림을 느낀 타카토시의 고백으로 두 사람은 연인이 되고, 매일 만나 행복한 데이트를 한다. 하지만, 왠지 종종 의미를 알 수 없는 눈물을 보이던 에미로부터 믿을 수 없는 비밀을 듣게 된 타카토시는 큰 혼란에 빠진다. 그 비밀은 바로 타카토시와 에미의 시간은 서로 반대로 흐르고 있고, 교차되는 시간 속에서 함께 할 수 있는 시간은 오직 30일뿐이라는 것. 30일 후에도, 이 사랑은 계속될 수 있을까?","2017","멜로/로맨스/판타지","미키 타카히로","후쿠시 소우타|고마츠 나나|","https://movie-phinf.pstatic.net/20170906_281/1504661660780autBq_JPEG/movie_image.jpg?type=m665_443_2","#fff3ff","#c3c2da","#b6c5af","#fdbb31","#819a56","https://www.youtube.com/embed/XEmXrbvaRZM");
    insertDB(systemDB,
        "시동","학교도 싫고 집도 싫고 공부는 더더욱 싫다며'엄마'(염정아)에게 1일 1강스파이크를 버는 반항아 '택일'(박정민).절친 '상필'(정해인)이 빨리 돈을 벌고 싶다며 사회로 뛰어들 때,무작정 집을 뛰쳐나간 '택일'은우연히 찾은 장품반점에서 남다른 포스의 주방장 '거석이형'(마동석)을 만나게 된다.강렬한 첫 인사를 나누자마자 인생 최대 적수가 된 '거석이형'과 '택일'.세상 무서울 것 없던 '택일'은 장품반점에서 상상도 못한 이들을 만나진짜 세상을 맛보게 되는데⋯인생 뭐 있어?일단 한번 살아보는 거야!","2019","드라마","최정열","마동석|박정민|정해인|염정아|최성은|","https://upload.wikimedia.org/wikipedia/ko/5/57/%EC%8B%9C%EB%8F%99_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg","#32b1d2","#dd343b","#48790c","#0285ef","#e3c1dc","https://www.youtube.com/embed/hKlpat_0IF0");
    insertDB(systemDB,
        "아이 필 프리티","뛰어난 패션센스에 매력적인 성격이지만 통통한 몸매가 불만인 ‘르네’ 하아.. 예뻐지기만 하면 뭐든 다 할 수 있을 것만 같다. 하늘에 온 마음을 담아 간절히 소원을 빌지만 당연히 달라지는 건 1%도 없고. 오늘도 헬스클럽에서 스피닝에 열중하는 ‘르네’! 집중! 또 집중! 난 할 수 있다! 예뻐질 수 있다..!!! 그러나 과도한 열정은 오히려 독이 되는 법. 미친 듯이 페달을 밟다가 헬스 클럽 바닥에 내동댕이쳐져 머리를 부딪히고.. 지끈지끈한 머리, 창피해서 빨개진 얼굴로 겨우 일어났는데 뭔가 이상하다! 헐, 거울 속의 내가… 좀 예쁘다?! 드디어 소원성취한 ‘르네’의 참을 수 없는 웃음이 터진다!","2018","코미디","에비 콘|마크 실버스테인","에이미 슈머|미셸 윌리엄스| 로리 스코벨| 톰 호퍼| 로렌 허튼","https://movie-phinf.pstatic.net/20180601_276/1527835091787c3BdN_JPEG/movie_image.jpg?type=f172_234","#d00508","#e69290","#c80c0a","#e48685","#3b3a38","https://www.youtube.com/embed/5xM5KSQxMeo");
    insertDB(systemDB,
        "어바웃 타임","모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다.바로 시간을 되돌릴 수 있는 능력이 있다는 것!그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수 는 없지만, 여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다. 그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와 그녀의 사랑이 완벽해 질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기 나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?","2013","로맨스/코미디","리차드 커티스","돔놀 글리슨|레이첼 맥아담스","https://movie-phinf.pstatic.net/20131115_243/1384498185621awKv1_JPEG/movie_image.jpg?type=f172_234","#ab1919","#d58c8c","#fab9a5","#8ba34f","#bb2d23","https://www.youtube.com/embed/tnyWkyDGWuM");
    insertDB(systemDB,
        "데드풀","정의감 제로, 책임감 제로, 정신은 인터스텔라급마블 역사상 가장 매력 터지는 히어로 ‘데드풀’이 온다!전직 특수부대 출신의 용병 ‘웨이드 윌슨(라이언 레놀즈)’은 암 치료를 위한 비밀 실험에 참여 후, 강력한 힐링팩터를 지닌 슈퍼히어로 ‘데드풀’로 거듭난다. 탁월한 무술실력과 거침없는 유머감각을 지녔지만 흉측하게 일그러진 얼굴을 갖게 된 데드풀은 자신의 삶을 완전히 망가뜨린 놈들을 찾아 뒤쫓기 시작하는데…","2016","액션","팀 밀러","라이언 레이놀즈","https://movie-phinf.pstatic.net/20160219_61/1455872433882gKqgb_JPEG/movie_image.jpg","#972a3d","#000002","#a22640","#3c3b49","#94939a","https://www.youtube.com/embed/AubJhjH0MfY");
    insertDB(systemDB,
        "헝거게임 : 판엠의 불꽃","무기는 단 하나! 모든 과정은 생중계된다! 승자와 패자를 결정하는 건 오로지 운명뿐! 세상을 변화시킬 거대한 혁명의 불꽃이 타오른다!12개의 구역으로 이루어진 독재국가 ‘판엠’이 체제를 유지하기 위해 만든 생존 전쟁 ‘헝거게임’. 일년에 한번 각 구역에서 추첨을 통해 두 명을 선발, 총 24명이 생존을 겨루게 되는 것. ‘헝거게임’의 추첨식에서 ‘캣니스’는 어린 여동생의 이름이 호명되자 동생을 대신해 참가를 자청하며 주목을 받는다. 과거 자신을 위기에서 구해줬던 ‘피타’ 역시 선발되어 미묘한 감정에 휩싸인다. ‘캣니스’는 금지구역에서 함께 사냥을 했던 ‘게일’에게 가족을 부탁하며 생존을 겨루게 될 판엠의 수도 ‘캐피톨’로 향하는데…세상을 변화시킬 거대한 혁명의 불꽃이 타오른다!","2012","액션/드라마/SF","게리 로스","제니퍼 로렌스|조쉬 허처슨|리암 헴스워스|엘리자베스 뱅크스|우디 해럴슨|스탠리 투치|","https://movie-phinf.pstatic.net/20120402_160/13333531264854NQHB_JPEG/movie_image.jpg","#9a2c00","#520805","#4a0f09","#bc7d13","#944413","https://www.youtube.com/embed/9pfVCKaheGQ");
    insertDB(systemDB,
        "인턴","프라다 입은 악마를 벗어난 '앤 해서웨이',수트 입은 70세 인턴 '로버트 드 니로'를 만나다!창업 1년 반 만에 직원 220명의 성공신화를 이룬 줄스(앤 해서웨이). TPO에 맞는 패션센스, 업무를 위해 사무실에서도 끊임 없는 체력관리, 야근하는 직원 챙겨주고, 고객을 위해 박스포장까지 직접 하는 열정적인 30세 여성 CEO! 한편, 수십 년 직장생활에서 비롯된 노하우와 나이만큼 풍부한 인생경험이 무기인 만능 70세의 벤(로버트 드 니로)을 인턴으로 채용하게 되는데..","2015","코미디","낸시 마이어스","로버트 드 니로|앤 해서웨이|","https://movie-phinf.pstatic.net/20150910_279/1441866003899BJKw7_JPEG/movie_image.jpg","#5c0108","#968976","#001231","#1d436a","#960818","https://www.youtube.com/embed/bwylOLy5ir0");
    insertDB(systemDB,
        "업","한방울 눈물과 한바탕 웃음!2009년 가장 아름다운 영화 ＜업＞ 애니메이션 사상 최초 칸 개막작 선정 디즈니•픽사 최초의 3D 디지털 성격 까칠한 할아버지 ‘칼’과 귀여운 8살 탐험가 ‘러셀’이 만났다! 평생 모험을 꿈꿔 왔던 ‘칼’ 할아버지는 수천 개의 풍선을 매달아 집을 통째로 남아메리카로 날려 버리는데, ‘칼’ 할아버지의 이 위대한 모험에 초대 받지 않은 불청객이 있었으니, 바로 황야의 탐험가 ‘러셀’! 지구상에 둘도 없을 이 어색한 커플이 함께 하는 대모험.그들은 과연 남미의 잃어버린 세계에서 사라져 버린 꿈과 희망,행복을 다시 찾을 수 있을까? 의 ‘존 라세터’ 감독이 총제작을 맡고, 의 ‘피트 닥터’ 감독이 연출한 은 디즈니•픽사 최초 3D 디지털의 화려한 볼거리가 자랑 거리! , 로 그레미와 에미상을 석권한 ‘마이클 지아치노’의 아름다운 O.S.T도 놓치지 말자! 물론 영화 시작에 앞서 픽사의 대표적인 애니메이터이자, 에 성우로 참여한 바 있는 한인 2세 ‘피터 손’ 감독의 단편 애니메이션 을 볼 수 있다는 점도 더없이 반갑다!","2009","애니메이션|가족|모험|코미디|액션","피트 닥터|밥 피터슨","에드워드 애스너| 조던 나가이| 크리스토퍼 플러머| 밥 피터슨","https://movie-phinf.pstatic.net/20111223_221/1324590426566npnJd_JPEG/movie_image.jpg?type=m665_443_2","#458bc7","#7fa7cb","#ececec","#aa9faa","#65a1d5","https://www.youtube.com/embed/551YG0kBQks");
    insertDB(systemDB,
        "주먹왕 랄프","모든 편견을 ‘부.숴.버.려!’“직업이 ‘악당’일 뿐, 진짜 ‘나쁜 놈’은 아니야!” 8비트 게임 ‘다고쳐 펠릭스’에서 건물을 부수는 악당 주먹왕 랄프. 30년째 매일같이 건물을 부수며 직업에 충실해왔지만, 악당이라는 이유로 누구도 그를 좋아하지 않는다.모두에게 인정 받는 영웅이 되고 싶은 마음에 급기야 자기 게임을 이탈하여 다른 게임으로 들어가는 랄프!슈팅게임 ‘히어로즈 듀티’를 거쳐 레이싱 게임 ‘슈가 러시’에 불시착하는 랄프는 과연 게임 세계의 새로운 영웅이 될 수 있을 것인가!그리고 랄프가 떠난 후 고장 딱지가 붙은 ‘다고쳐 펠릭스’ 게임은 오락실에서 퇴출될 위기를 넘길 수 있을까? 12월,모든 편견을 포맷시키는 단 하나의 영화!","2012","애니메이션|코미디|가족","리치 무어","제인 린치| 존 C. 레일리| 잭 맥브레이어| 정준하","https://movie-phinf.pstatic.net/20121123_34/1353646026595Ju6dI_JPEG/movie_image.jpg?type=m665_443_2","#cf4636","#b36b9b","#0f2557","#b94165","#93d5f5","https://www.youtube.com/embed/wErk0gZpq38");
    insertDB(systemDB,
        "토이 스토리4","장난감의 운명을 거부하고 떠난 새 친구 ‘포키’를 찾기 위해 길 위에 나선 ‘우디’는 우연히 오랜 친구 ‘보핍’을 만나고 그녀를 통해 새로운 세상에 눈을 뜨게 된다. 한편, ‘버즈’와 친구들은 사라진 ‘우디’와 ‘포키’를 찾아 세상 밖 위험천만한 모험을 떠나게 되는데…","2019","애니메이션/모험/코미디/가족/판타지","조시 쿨리","톰 행크스|팀 알렌|애니 파츠|토니 헤일","https://movie-phinf.pstatic.net/20190611_117/1560221190708y3bbv_JPEG/movie_image.jpg?type=m665_443_2","#cbd8e1","#4883bb","#c8b733","#393f59","#000002","https://www.youtube.com/embed/u8GQibRXVHg");
    insertDB(systemDB,
        "인사이드 아웃","“괜찮아, 다 잘 될 거야!우리가 행복하게 만들어 줄게” 모든 사람의 머릿속에 존재하는 감정 컨트롤 본부 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들.이사 후 새로운 환경에 적응해야 하는 ‘라일리’를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 ‘기쁨’과 ‘슬픔’이 본부를 이탈하게 되자 '라일리’의 마음 속에 큰 변화가 찾아온다. 라일리가 예전의 모습을 되찾기 위해서는‘기쁨’과 ‘슬픔’이 본부로 돌아가야만 한다! 그러나 엄청난 기억들이 저장되어 있는 머릿속 세계에서 본부까지 가는 길은 험난하기만 한데… 과연, ‘라일리’는 다시 행복해질 수 있을까? 지금 당신의 머릿속에서 벌어지는 놀라운 일!하루에도 몇번씩 변하는 감정의 비밀이 밝혀진다!","2015","애니메이션/코미디","피트 닥터","에이미 포엘러|필리스 스미스|민디 캘링|빌 헤이더|루이스 블랙|케이틀린 디아스|카일 맥라클란|다이안 레인|","https://movie-phinf.pstatic.net/20150714_216/14368354197498c2rS_JPEG/movie_image.jpg?type=m665_443_2","#f9b842","#7a1863","#00a64e","#040241","#05004b","https://www.youtube.com/embed/1KGZtWbZtq8");
    insertDB(systemDB,
        "주토피아","누구나 살고 싶은 도시 1위, 주토피아연쇄 실종 사건 발생!“미치도록 잡고 싶었다!”교양 있고 세련된 라이프 스타일을 주도하는 도시 주토피아. 이 곳을 단숨에 혼란에 빠트린 연쇄 실종사건이 발생한다! 주토피아 최초의 토끼 경찰관 주디 홉스는 48시간 안에 사건 해결을 지시 받자 뻔뻔한 사기꾼 여우 닉 와일드에게 협동 수사를 제안하는데… 2월 17일, 스릴 넘치는 추격전의 신세계가 열린다!","2016","애니메이션/액션/모험/코미디/가족","바이론 하워드, 리치무어","지니퍼 굿윈|제이슨 베이트먼|알란 터딕|이드리스 엘바|J.K. 시몬스","https://movie-phinf.pstatic.net/20160217_153/1455686083975zjajH_JPEG/movie_image.jpg?type=m665_443_2","#ebffff","#e5c094","#82d6fa","#7474a6","#2a171d","https://www.youtube.com/embed/RGucZx3TUnc");
    insertDB(systemDB,
        "러브 액츄얼리","사랑에 상처받은 당신을 위해,사랑하지만 말하지 못했던 당신을 위해,사랑에 확신하지 못했던 당신을 위해,모두의 마음을 따뜻하게 할 선물이 찾아옵니다.2017년 크리스마스, 그리고 2018년에도, 러브 액츄얼리!","2003","멜로/로맨스/드라마/코미디","리차드 커티스","휴 그랜트|콜린 퍼스|리암 니슨|키이라 나이틀리|엠마 톰슨|앨런 릭먼|빌 나이|로라 리니|마틴 맥커친|","https://movie-phinf.pstatic.net/20191202_278/1575250003279Taafr_JPEG/movie_image.jpg","#c01d22","#7f181b","#ba5c5c","#7e1117","#9a1c1f","https://www.youtube.com/embed/7w-FtQ2Ak_o");
    insertDB(systemDB,
        "500일의 썸머","운명적 사랑을 믿는 남자 ‘톰’모든 것이 특별한 여자 ‘썸머’에 완전히 빠졌다. 사랑은 환상일 뿐이라고 생각하는 여자 ‘썸머’친구인 듯 연인 같은 ‘톰’과의 부담 없는 썸이 즐겁다.“저기… 우리는 무슨 관계야?”설렘으로 가득한 시간도 잠시두 사람에게도 피할 수 없는 선택의 순간이 찾아오는데…“우리 모두의 단짠단짠 연애담!”설레는 1일부터 씁쓸한 500일까지서로 다른 남녀의 극사실주의 하트시그널!","2009","드라마/멜로/로맨스","마크 웹","조셉 고든 레빗|주이 디샤넬|","https://movie-phinf.pstatic.net/20210521_40/1621587883416Xe5Lu_JPEG/movie_image.jpg","#f8e8e9","#f8dde4","#f2d1da","#e9c1ca","#e0b5c8","https://www.youtube.com/embed/m5bHFoU4F0w");
    insertDB(systemDB,
        "장난스런 키스","내가 좋아하는 사람이 날 좋아할 확률은 얼마나 될까?♥A반 남신 ‘장즈수’와처음 본 순간 KISS한 F반 ‘위안샹친’!수학처럼 안 풀려도 절대 포기할 수 없는확률 0% 멀고도 용감한 짝사랑 일대기♥장난 아니게 설레는 로코의 새로운 흥행 공식2019년 봄, 너 x 나 = 공식 ♡ 로코","2019","멜로/로맨스","프랭키 첸","왕대륙|임윤|","https://movie-phinf.pstatic.net/20190305_257/1551749723722A0Gw5_JPEG/movie_image.jpg?type=m665_443_2","#ecf2f2","#a0c1ac","#7da187","#f4303e","#2454ba","https://www.youtube.com/embed/F1Y44svLimU");
    insertDB(systemDB,
        "잭 스나이더의 저스티스 리그","기다렸던 감독판, 잭 스나이더의 저스티스 리그슈퍼맨이 죽고 지구에 어둠의 그림자가 드리운다. ‘마더박스’를 차지하기 위해 빌런 스테픈울프가 파라데몬 군단을 이끌고 지구에 온 것이다. 지구를 지키기 위해 목숨을 바친 슈퍼맨의 희생이 헛되지 않도록 하기 위해 브루스 웨인은 다이애나 프린스와 적에 맞서기로 한다. 배트맨과 원더 우먼은 새로이 등장한 위협에 맞서 싸우기 위해 특별한 능력을 가진 메타휴먼, 아쿠아맨과 사이보그, 플래시를 찾아가 설득하여 힘을 합친다. 드디어 한 팀이 된 저스티스 리그. 혹시 스테픈울프와 데사드 그리고 다크사이드를 물리치기에 너무 늦어버린 것이 아닐까?","2021","액션/모험/판타지/SF","잭 스나이더","벤 애플렉|헨리 카빌|갤 가돗|제이슨 모모아|에즈라 밀러|레이 피셔|","https://movie-phinf.pstatic.net/20210319_251/1616118380277ezJm4_JPEG/movie_image.jpg?type=m665_443_2","#cbcbce","#96979c","#535459","#343539","#020202","https://www.youtube.com/embed/keGpIonTbpg");
    insertDB(systemDB,
        "악인전","우연히 연쇄살인마의 표적이 되었다 살아난 조직 보스 장동수와범인잡기에 혈안이 된 강력반 미친개 정태석.타협할 수 없는 두 사람이 연쇄살인마 K를 잡기 위해 손잡는다.표적은 하나, 룰도 하나!먼저 잡는 놈이 갖는다!","2019","범죄/액션","이원태","마동석|김무열|김성규|","https://movie-phinf.pstatic.net/20190515_203/1557888285764Rvouz_JPEG/movie_image.jpg","#35354d","#181b2a","#282b34","#80abb2","#0e0e0e","https://www.youtube.com/embed/UmebAbuTfXI");
    insertDB(systemDB,
        "존 윅 - 리로드","업계 최고의 레전드 킬러 ‘존 윅’은 과거를 뒤로한 채 은퇴를 선언하지만, 과거 자신의 목숨을 구했던 옛 동료와 피로 맺은 암살자들의 룰에 의해 로마로 향한다. ‘국제 암살자 연합’을 탈취하려는 옛 동료의 계획으로 ‘존 윅’은 함정에 빠지게 되고, 전세계 암살자들의 총구는 그를 향하는데...","2017","액션/범죄/스릴러","채드 스타헬스키","키아누 리브스","https://movie-phinf.pstatic.net/20200807_193/1596789703698oLgpX_JPEG/movie_image.jpg","#6d6e72","#47545c","#000004","#27343c","#27343c","https://www.youtube.com/embed/qtIaqB1h37A");
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

    //데이터 개수 세기 
    countDB();
}

function createTable(db) {
    var strCreate = "CREATE TABLE IF NOT EXISTS movie_board"
                        + " (idx INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                        + " title TEXT NOT NULL,"
                        + " content TEXT NOT NULL,"
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
    // console.log("checkDB 들어옴");

    //같은 이름 존재 하는 경우 어떻게 알지 
    db.transaction(function (tx) { 
        tx.executeSql(check, [title], function (tx, result) { 
            dataset = result.rows;
            console.log(dataset);
            if(dataset.length>0){
                // console.log("같은 이름 존재"); 
                // dropTable(db);
                isTrue = false;
            }
            else{
                // console.log("같은 이름 없음");
                isTrue = true;
            }
        }); 
    }); 
}

function countDB(){
    db = systemDB;
    var count = "select idx from movie_board";
        db.transaction(function (tx) { 
            tx.executeSql(count, [], function (tx, result) { 
                len = result.rows.length;
                console.log(len);
        }); 
    }); 

    setTimeout(function(){
        if(len>26){
            console.log("데이터 26개 초과");
            isTrue = false;
        }
        else{ 
            setData();
        }
    },300);
}

function insertDB(db, title, content, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url) {
    
    //DB에 title 존재하는지 확인 
    //isTrue = true
    checkDB(db,title);

    setTimeout(function(){
        if(isTrue){
            // console.log("같은 이름 존재하지 않음");
        }
        else{
            // console.log("같은 이름 존재 하는 경우");
            // console.log("insert  취소");
            return;
        }
        
        var strSql = "INSERT INTO movie_board (title, content, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5, url) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
    
        db.transaction(function (tx) { 
            tx.executeSql(strSql, [title, content, pubDate, genre, director, actor, img, color1, color2, color3, color4, color5,url]);
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
                    $("#content").html(item['content']);
                    $("#year").html(item['pubDate']); 
                    document.getElementById("img").src = item['img'];   
                    $('#url').attr('src', item['url']);            
                    $("#genre").html(item['genre']);      
                    $("#director").html(item['director']);      
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
function getSearch(idx){
    db = systemDB
    var strSql = "SELECT * FROM movie_board WHERE idx = ?"; 
    db.transaction(function (tx) { 
        tx.executeSql(strSql, [idx], function (tx, result) { 
            dataset = result.rows; 
            if (dataset.length > 0) {
                for (var i = 0, item = null; i < dataset.length; i++) { 
                    item = dataset.item(i); 
                    document.getElementById("img").src = item['img'];  
                    console.log("333333");
                    $("#color1").css("background-color",item['color1']);       
                    $("#color2").css("background-color",item['color2']); 
                    $("#color3").css("background-color",item['color3']); 
                }
            } else {
                console.log("데이터 리스트 없음");
            }
        }); 
    }); 
}