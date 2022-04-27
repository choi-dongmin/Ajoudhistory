$(document).ready(function(){
  //members Professors
  // NOTE: gotop fadin out with scroll
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(window).scrollTop() >30) {
          $('.gotop').css({
            "opacity":"1", "pointer-events" : "auto"
          })
        }
        else {
          $('.gotop').css({
            "opacity":"0", "pointer-events" : "none"
          })
        }
      })
    })
  //index top-intro fadin out with scroll
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(window).scrollTop() > 400) {
          $('#top-intro').css({
            "opacity":"1", "pointer-events" : "auto"
          })
        }
        else {
          $('#top-intro').css({
            "opacity":"0", "pointer-events" : "none"
          })
        }
      })
    })
    //index index-news fadin out with scroll
      $(document).ready(function(){
        $(window).scroll(function(){
          if ($(window).scrollTop() > 600) {
            $('#index_news').css({
              "opacity":"1", "pointer-events" : "auto"
            })
          }
          else {
            $('#index_news').css({
              "opacity":"0", "pointer-events" : "none"
            })
          }
        })
      })



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 메인페이지 수정을 위한 변수들
    var index_news_add =['https://www.kyosu.net/news/articleView.html?idxno=86875', 'https://www.kyosu.net/news/articleView.html?idxno=86878', 'https://www.donga.com/news/article/all/20191226/98963885/1','https://www.donga.com/news/article/all/20160620/78750340/1']
    var index_news_date = ['2022.04.05','2022.04.05','2019.12.26','2016.06.30' ]
    var index_news_title = ['한국사 변곡점의 ‘권력 메커니즘’ 빅데이터로 분석하다.', '역사학자는 역사연구 디자이너…역사학의 미래 설계해야..', '조선시대 장원급제 여부 고위직 승진과 큰 관계 없었다.', '인공지능으로 사료 분석… 역사학의 ‘빅데이터 혁명’ 시작되나?']

    // NOTE: put in the news to index function
    for (var i = 0; i < index_news_add.length; i++) {
      $("#index_news").append('<a href="'+index_news_add[i]+'" target="_blank">'+index_news_date[i]+' '+index_news_title[i]+'</a><br><br>');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //맴버페이지
    // NOTE: 센터장 수정을 위한 요소들
    const director_info = { name :'이상국', director_add: 'https://scholar.google.com/citations?user=KP4FYvkAAAAJ&hl=en', director_position: '아주대학교 사학과'  }
    var director_eng_name = 'LSK'
    // NOTE: 맴버 수정을 위한 요소들
    var professors_arr = ['김종식','박구병','신현정','유재인','이경원','예홍진','한상우','한상준','권기중','박종희','송양섭','이원재'];
    var professors_eng_arr = ['KJS','PGB','SHJ','YJI','LKW','EHJ','HSU','HSJ','KGJ','PJH','SYS','LWJ'];
    const professors = {
                        name1 :professors_eng_arr[0], professors_add1: 'http://history.ajou.ac.kr/history/professor/professor01.jsp?include=view&article_no=200711111&board_wrapper=%2Fhistory%2Fprofessor%2Fprofessor01.jsp&pager.offset=0&board_no=360', professors_position1: '아주대학교 사학과',
                        name2 :professors_eng_arr[1], professors_add2: 'http://history.ajou.ac.kr/history/professor/professor01.jsp?include=view&article_no=200911016&board_wrapper=%2Fhistory%2Fprofessor%2Fprofessor01.jsp&pager.offset=0&board_no=360', professors_position2: '아주대학교 사학과',
                        name3 :professors_eng_arr[2], professors_add3: 'http://alphaminers.net/sub02/sub02_01.php?swf_pn=2&swf_sn=1&swf_pn2=1', professors_position3: '아주대학교 산업공학과',
                        name4 :professors_eng_arr[3], professors_add4: 'https://ajou.ac.kr/fe/faculty/prof-search-popup.do?mode=profView&empl_no=201211712&article_no=115173', professors_position4: '아주대학교 금융공학과',
                        name5 :professors_eng_arr[4], professors_add5: 'http://media.ajou.ac.kr/media/professor/professor01.jsp?include=view&article_no=200311010&board_no=305', professors_position5: '아주대학교 미디어학과',
                        name6 :professors_eng_arr[5], professors_add6: 'http://security.ajou.ac.kr/security/faculty/faculty01.jsp?include=view&article_no=199311055&board_no=1407', professors_position6: '아주대학교 사이버보안학과',
                        name7 :professors_eng_arr[6], professors_add7: 'http://history.ajou.ac.kr/history/professor/professor01.jsp?include=view&article_no=202110026&board_no=360', professors_position7: '아주대학교 사학과',
                        name8 :professors_eng_arr[7], professors_add8: 'http://history.ajou.ac.kr/history/professor/professor01.jsp?include=view&article_no=201810375&board_no=360', professors_position8: '아주대학교 사학과',
                        name9 :professors_eng_arr[8], professors_add9: 'https://hansung.ac.kr/gshansung/7255/subview.do', professors_position9: '한성대학교 역사문화학',
                        name10 :professors_eng_arr[9], professors_add10: 'http://jhp.snu.ac.kr/', professors_position10: '서울대 정치외교학과',
                        name11 :professors_eng_arr[10], professors_add11: 'https://koreahistory.korea.ac.kr/koreahistory/professor/fulltime.do#none', professors_position11: '고려대학교 한국사학과',
                        name12 :professors_eng_arr[11], professors_add12: 'https://sociology.kaist.ac.kr/', professors_position12: '카이스트 문화기술대학원'
                        }

      // NOTE: director info input function
      $(".memeber_infomation").append('<div class="team-row" id="director"><div class="member" id="member_diractor"><a href="'+director_info['director_add']+'" style="text-decoration:none; color:black;"><div class="diractor_text"><span>Diractor</span><div class="diractor_text_under_line"></div></div><img src="./img/members/eng/'+director_eng_name+'.png" style="width: 180px; height: 180px;"><h2>'+director_info['name']+'</h2><p>'+director_info['director_position']+'</p></a></div></div>');
      //members info input function
      $(".memeber_infomation").append('<div class="team-row" id="professors"></div>');
      for (var i = 0; i < professors_arr.length; i++) {
        $("#professors").append('<div class="member"><a href="'+professors['professors_add'+(i+1)]+'" target="_blank" style="text-decoration:none; color:black;"><img src="./img/members/eng/'+professors['name'+(i+1)]+'.png"><h2>'+professors_arr[i]+'</h2><p>'+professors['professors_position'+(i+1)]+'</p></a></div>');
      }


      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // reseraches page
      var reseraches_info_num = 1;

      //리서치 수정 변수들
      var reseraches_title =[
                                    '데이터 구축사업(2016 ~ 현재)',
                                    '「디지털화성시문화대전」 기초조사연구 및 원고집필사업(2020~2021)',
                                    '‘빅데이터’ 분석 기반 한국사 권력 메커니즘(2015~2020)',
                                    '성북구 마을기록 아카이브 기반 활용 서비스 기획 연구사업(2018)'
                                  ]

      var reseraches_with =[

                                    '주관기관: 아주대학교 디지털역사연구센터',
                                    '주관기관: 한국학중앙연구원',
                                    '주관기관: 한국연구재단',
                                    '주관기관: 성북문화원'
                                ]



      var research_elements =[
            '<p>아주대학교 디지털역사연구센터는 창립 이래 꾸준히 질적 자료에 해당하는 역사 사료들을 전산·계량·네트워크적 분석이 가능한 양적자료로 전환하는 작업을 해오고 있다.</p><br> <p>사업성과<br>『안동권씨성화보』·『문화류씨가정보』 등의 족보자료, 『조선왕조실록』, 『고려사』, 『비변사등록』 등 역사 사료들의 양적 자료 전환 및 이를 통한 HAVNet 구축</p>',
            '<p>본 사업은 한국학중앙연구원이 진행 중인 『한국향토문화전자대전』 구축 사업의 일환으로 「디지털화성시문화대전」의 편찬을 위한 작업이다. 화성시의 고고·역사·민속·문화 자원 전체를 조사·수집·정리하여 문화자료를 체계적으로 집대성하는 것이 목적이다. 이를 통해 화성시의 역사문화자원을 디지털화 하여 영구히 보존하고, 효율적으로 활용할 수 있도록 디지털 아카이브를 구축했다.</p><br> <p>사업성과<br>1) 화성시에 향토문화를 정리한 뒤 사전 편찬을 위한 항목을 연구 및 선정<br>2) 항목의 내용을 전문적으로 집필할 수 있는 집필진을 구성하여 개관항목 30개, 기획항목 20개, 일반항목 1,250개, 200자 원고지 총 12,166매의 항목 작성을 완료하였다.</p>',
            '<p>본 연구는 역사적 전환 과점에서 지배 엘리트들의 정치적 선택을 추동한 동학을 그들의 혈연·혼인·학맥 등 다양한 사회적 관계 네트워크에 주목해 분석하고자 했다. 이때 장기지속의 관점에서 분석하기 위해 여말선초의 전환기부터 일제시기까지를 연구 범위로 설정하였다. 안동권씨성화보』, 『조선왕조실록』, 『고려사』 등의 사료를 정제한 ‘역사 빅데이터’를 바탕으로 1)언어/전산학적 분석, 2)계량 분석, 3)네트워크 분석을 하였다.<br> ‘언어/전산학적 분석’을 통해서는 ‘역사 빅데이터’상 문장 정보의 내부구조를 파악하였으며, 계량 분석을 통해서는 혈연관계를 분석해 1·2촌 안의 관계에서 친족의 사회적 지위가 어떤 긴밀한 연결성을 지니는지, 가문간 혼인을 통한 지위 및 계급의 확장과 세습에 관한 유기적 연결 관계를 분석했다. 네트워크 분석을 통해서는 이전 분석들의 연구결과들을 효과적으로 시각화 하여 제시했다. 다른 시간대에 존재하는 네트워크 그룹간 유사도를 계산했으며, 이를 통해 역사 자료에서 확인 가능한 광범위한 시간 속 방대한 수의 사람들이 시간의 흐름에 따라 어떻게 이합집산했는지 파악을 위한 ‘시계열 시각화 방법’을 제안했다. 최종적으로 지배 엘리트들의 정치적 선택의 패턴과 권력 계승의 메커니즘을 분석하는 것을 연구의 목적으로 했다.</p><br><p>연구성과<br>1) HAVNet 구축: HAVNet은 본 연구 목적 달성을 위해 구축한 데이터베이스이다. HAVNet은 기존 여러 기관에서 제공하는 디지털 형식의 역사적 자료를 양적 자료로 전환하여 통합-구조화 한 형태이며, 인물을 중심으로 혈연·지연·관연 관계에 데이터를 종합하여 다양한 형태로 구성된 인물-인물 사이의 관계를 파악 및 분석할 수 있는 정보를 연구자에게 제공할 수 있다. <br>2) 본 연구는 1단계(2015.09.~2018.08.)와 2단계(2018.09.~2020.08.)에 이르기 까지 KCI 논문 13편, SCI급 논문 13편, 저역서 2편, 세미나 및 발표회 참여 11회, 국내외 학술대회 46회, 연구팀 주관 발표회 18회, 특허 12건, 연구용 프로그램 및 서버 개발 7건, 연구 관련 언론보도 25건, 국내외 연구기관과 협정서 8건, 산업화 실적 1건의 연구성과를 거뒀다.</p>',
            '<p>본 사업을 성북구의 유·무형으로 존재하는 역사·문화자료 및 다양다종의 마을기록을 체계적으로 수집 및 저장할 수 있는 아카이브 시스템을 기획하고, 이를 활용하여 디지털 역사·문화 콘텐츠를 제작하는 것을 목표로 했다. 이때 콘텐츠 이용자가 성북문화원에서 지정한 역사문화자산을 탐방할 뿐아니라, 이용자 스스로가 능동적으로 성북동을 구석구석 탐험하고, 탐험의 결과물을 다른 이용자에게 공유하는, 쌍방향의 열린 콘텐츠 제작을 목표로 했다.</p><br><p>사업성과<br>아주대학교 디지털역사 연구센터는 성북문화원이 보유하고 있는 마을기록 및 역사·문화자료를 활용하여, 성북구민 및 성북구 방문자들의 역사문화 참여 콘텐츠 ‘성북동 갈까?’와 ‘성북동 여기어때!’를 개발하였다. </p>']

      //reseraches elements add
      for (var i = 0; i < research_elements.length; i++) {
        $("#reseraches_row").append('<div class="col-sm-12"><div class="reseraches" id="reseraches_'+reseraches_info_num+'"><div class="reseraches_info" id="reseraches_info_'+reseraches_info_num+'"></div></div></div>');
        $("#reseraches_info_"+reseraches_info_num).append('<div class="reseraches_subjact_titles"><span class="">'+reseraches_title[i]+'</span></div><div class="reseraches_with">'+reseraches_with[i]+'</div><div class="reseraches_subjact_texts">'+research_elements[i]+'</div>');

        // 이미지를 같이 추가하면 (i == 2) 이부분을 숫자면 1 증가, 내용이 텍스트 뿐이라면 || 를 이용해서 바로 밑 코드 () 안에 id 값과 맞게 맞춰주세요 ex:(i == 0 || i == 3) : 기존의 i == 2 에서 최신자료(i == 0)가 들어오면서 1 == 3
        if (i == 2) {
        }
        else {
          $("#reseraches_info_"+reseraches_info_num).append('<div class="reseraches_subjact_imgs"><img src="./img/reseraches/reseraches_img_'+reseraches_info_num+'.jpg"></div>');
        }
        reseraches_info_num++;
      }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // publications elements
      var publications_ele = [

              "최상일, 최지우, 백승민, 예홍진, & 이상국. (2021). 조선 초기 관료의 관청이동을 통해 본 주요 통치기구의 위상—HAVNet 자료를 중심으로—. 사림, (75), 123-145.",
              "Hong, E., Lee, S., & Yoo, J. (2021). Strengthening the inner circle: the marriage networks of elite families in Joseon Korea. The History of the Family, 26(2), 313-335.",
              "최상일, 최지우, 백승민, 예홍진, & 이상국. (2021). 조선 초기 관료의 관청이동을 통해 본 주요 통치기구의 위상—HAVNet 자료를 중심으로—. 사림, (75), 123-145.",
              "권기중, 조선후기 경주 최부자댁의 가족구성과 노비경영, 새로 찾은 경주 최부자댁 근현대 기록물 연구 학술심포지엄 (Feb, 2021)",
              "Kim, M., Lee, D. G., Lee, S., Lee, G. H., & Shin, H. (2020). Inference on historical factions based on multi-layered network of historical figures. Expert Systems with Applications, 161, 113703.",
              "이상국. (2020). 고려시대 생산과 납세의 대상. 한국중세사연구, 61, 11-38.",
              "이상국, 디지털 기반 역사학 연구의 방법론과 가능성 , 인공지능 인문학 전국학술대회 (Nov, 2020)",
              "Ha, H., Han, H., & Lee, K. (2020). A visualization system for exploring logo trend and design shape patterns. Applied Sciences, 10(13), 4579.",
              "윤태린, 이경원, 하효지, 한현우, 홍주원, A Conference Paper Exploring System Based on Citing Motivation and Topic , IEEE Pacific Visualization Symposium 2020 (PacificVis 2020) (Jun, 2020)",
              "한현우, 이경원, 공현식, 이수정, 하효지, 허재종, 홍주원, 홍준엽, An Interactive Paper Summarization System Through Topic Network Visualization , IEEE Pacific Visualization Symposium 2020 (PacificVis 2020) (Jun, 2020)",
              "Lee, S., & Park, J. H. (2019). Quality over Quantity: A Lineage-Survival Strategy of Elite Families in Premodern Korea. Social Science History, 43(1), 31-61.",
              "Ha, H., Mun, S., Choi, G., Hong, E., Lee, S., & Lee, K. (2019). Visual Analysis on the Political Orientation of Historical Characters in the Joseon Dynasty: Focusing on Seo, Geojeong. Archives of Design Research, 32(1), 147-160.",
              "이상국, 박종희, 성공의 경로: 조선시대 지배엘리트의 관직이력 데이터[HAVNet] 분석을 중심으로 , 규장각한국학워크숍 2019년 제2회 학술대회 (Dec, 2019)",
              "김명준, 신현정, 이상국, Inference on Historical Factions by Parallel and Layered Integration of Human Network , International Joint Conference on AI & Data Science: Mathematics and Applications (Nov, 2019)",
              "이상국, The Bureaucratic Path for the Family in Pre-Modern Joseon Dynasty , 2019 APSA(American Political Science Association) Annual Meeting (Aug, 2019)",
              "김명준, 신현정, Error Analysis for Hierarchical Semi-Supervised Learning , 2019 한국데이터마이닝학회 춘계학술대회 (KDMS 2019 Spring) (Apr, 2019)",
              "Kim, M., Lee, D. G., & Shin, H. (2019). Semi-supervised learning for hierarchically structured networks. Pattern Recognition, 95, 191-200.",
              "Ha, H., Han, H., Mun, S., Bae, S., Lee, J., & Lee, K. (2019). An improved study of multilevel semantic network visualization for analyzing sentiment word of movie review data. Applied Sciences, 9(12), 2419.",
              "Ha, H., Lee, J., Han, H., Bae, S., Son, S., Hong, C., ... & Lee, K. (2019). Dementia Patient Segmentation Using EMR Data Visualization: A Design Study. International Journal of Environmental Research and Public Health, 16(18), 3438.",
              "Karim, R. M., Kwon, O. H., Park, C., & Lee, K. (2019). A study of colormaps in network visualization. Applied Sciences, 9(20), 4228.",
              "윤태린, 이경원, 하효지, 한현우, 홍주원, A Paper-Search System to Identify Citation Networks and Motivations , IEEE VIS 2019 (Oct, 2019)",
              "김명준, 신현정, 이동기, 이상국, 이근호, Inference on Political Factions based on Hierarchical Structure of Genealogy: Three Major Purges in Medieval Joseon Korea , 43rd Annual Meeting of the Social Science History Association (SSHA 2018) (Nov, 2018)",
              "Lee, D. G., Lee, S., Kim, M., & Shin, H. (2018). Historical inference based on semi-supervised learning. Expert Systems with Applications, 106, 121-131.",
              "Lee, S., & Yoo, J. (2018). The unexpected effect of social status on reproduction: a case study in Joseon Korea from the nineteenth to the twentieth centuries. The History of the Family, 23(1), 109-134.",
              "이상국, The Changces of Success in Joseon Korea: Lineage Strategies for the Civil Service Examination , Association for Asian Studies Annual Conference (Mar, 2018)",
              "김명준, 신현정, 이동기, Historical Faction Identification based on Multi-Layered Genealogy Network in Medieval Joseon Korea , 2018 한국소프트웨어종합학술대회 Korea Software Congress 2018 (KSC2018) (Dec, 2018)",
              "김명준, 신현정, 이동기, 이상국, 이근호, Inference on Political Factions based on Hierarchical Structure of Genealogy: Three Major Purges in Medieval Joseon Korea , 43rd Annual Meeting of the Social Science History Association (SSHA 2018) (Nov, 2018)",
              "GUO WEN JUN, 이경원, 김승욱, 문성민, BubbleUp: Toward Better Analysis for the Temporal Event Data , IEEE VIS 2018 (Oct, 2018)",
              "최경철, 이경원, 윤태린, 임수현, Citation Network Visualization of Reference Papers Based on Influence Groups , The 8th IEEE Symposium on Large Data Analysis and Visualization (LDAV 2018) (Oct, 2018)",
              "문성민, 이경원, Guillaume Desagulier, 최경철, PreechVis: Visual profiling using multiple-word combinations , 13th International Joint Conference on Computer Vision,Imaging and Computer Graphics Theory and Applications (Jan, 2018)",
              "Piezunka, H., Lee, W., Haynes, R., & Bothner, M. S. (2018). Escalation of competition into conflict in competitive networks of Formula One drivers. Proceedings of the National Academy of Sciences, 115(15), E3361-E3367.",
              "송양섭. (2018). 반계 유형원의 敎選論과 貢擧制 구상. 한국사연구, (182), 143-198.",
              "송양섭. (2018). 반계 유형원의 관제개편 구상. 조선시대사학보, (86), 155-189.",
              "문성민, 이경원, 이상국, 최경철, VISUAL ANALYSIS FOR VOTING RELATIONSHIPS IN JOSEON DYNASTY, KOREA , 10th International Conference on ICT, Society and Human Beings (Jul, 2017)",
              "김명준, 이동기, 신현정, 이상국, 기계학습을 통한 조선시대 훈구파와 사림파의 대립 양상 추론 , 제14회 2017 Buisiness Intelligence Conference (BIDM 2017 Spring) (Apr, 2017)",
              "GUO WEN JUN, 이경원, 김승욱, 손상준, 신현정, 홍창형, Data-driven Dementia Diagnosis Record Visualization System , The 10th International Symposium on Visual Information Communication and Interaction (VINCI 2017) (Aug, 2017)",
              "하효지, 이경원, 배성윤, 손상준, 신현정, 이지혜, 임수현, 한현우, 홍창형, A Visualization System to subdivide Dementia Diagnosis Stages , ISMB/ECCB 2017 (Jul, 2017)",
              "이지혜, 이경원, 배성윤, 손상준, 신현정, 하효지, 한현우, 홍창형, Visual Analytics for Biomedical Cluster Subdivision: A Design Study with Psychiatrists , Computer Graphics International 2017 (Jun, 2017)",
              "배성윤, 이경원, 문성민, 방선주, 손상준, 신현정, 임수현, 최경철, 홍창형, Visualization of Decision Trees that Analyze Medical Data , Computer Graphics International 2017 (Jun, 2017)",
              "문성민, 이경원, Guillaume Desagulier, How can we capture multiword expressions? , 5th International Conference on Statistical Language and Speech Processing (SLSP 2017) (Oct, 2017)",
              "Matthew Brehmer, 이경원, Bongshin Lee, Ivan Viola, 서진욱, Demonstrating the Value of Visualization: Highlights from the PacificVis 2017 Visual Data Storytelling Contest , VIS 2017 (Oct, 2017)",
              "GUO WEN JUN, 이경원, 김승욱, 손상준, 신현정, 홍창형, Data-driven Dementia Diagnosis Record Visualization System , The 10th International Symposium on Visual Information Communication and Interaction (VINCI 2017) (Aug, 2017)",
              "하효지, 이경원, 배성윤, 손상준, 신현정, 이지혜, 임수현, 한현우, 홍창형, A Visualization System to subdivide Dementia Diagnosis Stages , ISMB/ECCB 2017 (Jul, 2017)",
              "문성민, 이경원, 이상국, 최경철, VISUAL ANALYSIS FOR VOTING RELATIONSHIPS IN JOSEON DYNASTY, KOREA , 10th International Conference on ICT, Society and Human Beings (Jul, 2017)",
              "배성윤, 이경원, 문성민, 방선주, 손상준, 신현정, 임수현, 최경철, 홍창형, Visualization of Decision Trees that Analyze Medical Data , Computer Graphics International 2017 (Jun, 2017)",
              "이지혜, 이경원, 배성윤, 손상준, 신현정, 하효지, 한현우, 홍창형, Visual Analytics for Biomedical Cluster Subdivision: A Design Study with Psychiatrists , Computer Graphics International 2017 (Jun, 2017)",
              "문성민, 이경원, Guillaume Desagulier, A visual approach for text analysis using multiword topics , Eurographics Conference on Visualization (EuroVis) (Jun, 2017)",
              "박흥석, 이경원, 임홍준, 이원재, NetSet: A systematic integration of visualization for analyzing set intersections with network , 2017 IEEE Pacific Visualization Symposium (PacificVis) (Apr, 2017)",
              "오소명, 오세종, 이경원, 하정현, DEGO: Development of Integrated Visualization Tool for Differentially Expressed Genes and Gene Ontology Analysis , 1st Special Issue International Workshop(SIIW 2017) (Feb, 2017)",
              "김병준, 전봉관, & 이원재. (2017). 비평 언어의 변동: 문예지 비평 텍스트에 나타난 개념단어의 변동 양상, 1995~ 2015. 현대문학의 연구, 61, 49-102.",
              "박흥석, 이경원, 임홍준, 이원재, NetSet: A systematic integration of visualization for analyzing set intersections with network , 2017 IEEE Pacific Visualization Symposium (PacificVis) (Apr, 2017)",
              "송양섭. (2017). 17 세기 강화도 鎭堡의 운영과 屯田策의 추진. 한국사연구, (176), 130-171.",
              "권기중. (2017). 조선후기 호적 연구의 현재와 향후 과제. 대동문화연구, (100), 177-200.",
              "권기중. (2017). 조선후기 서울의 호구 변동과 인구기록의 특성-한성부 호구 자료를 중심으로. 한국학논총, 47, 213-240.",
              "권기중, 호적연구의 현재와 향후 과제, 조선후기 경주 최부자댁의 가족구성과 노비경영 (Sep, 2017)",
              "박만규, 예홍진, 이상국, A Text Mining Technique Approach to Political Fences in the Historical Figures from the Vast Historical Records of Joseon Korea , 41st Annual Meeting of the Social Science History Association (SSHA2016) (Nov, 2016)",
              "이동기, 이상국, 신현정, Quantitative Inference on Power Mechanism based on Genealogy Network in Medieval Joseon Korea , 41st Annual Meeting of the Social Science History Association (Nov, 2016)",
              "유재인, 이상국, An Opportunity Cost Approach to Fertility Pattern in the 19th to Early 20th Century Korea , Linking Past to Present(Population Association of Japan Annual Meeting 2016) (Jun, 2016)",
              "김명준, 신현정, 남용현, 이상국, Semi-Supervised Learning for Stratified Networks , 대한산업공학회 2016 춘계공동학술대회 (Apr, 2016)",
              "이동기, 신현정, 이상국, 기계학습을 활용한 조선시대 권력구조 추론: 조선왕조실록과 성화보 중심사례 , The Business Intelligence and Data Mining Conference (BIDM 2016 Spring) (Apr, 2016)",
              "김명준, 신현정, 남용현, 이상국, Semi-Supervised Learning using inter-connectivity in a Hierarchical Network , The Business Intelligence and Data Mining Conference (BIDM 2016 Spring) (Apr, 2016)",
              "김종식. (2016). 1910 년대 재조일본인 정치가의 정체성 형성과정-마키야마 고죠 (牧山耕藏) 를 중심으로. 사림, (56), 397-422.",
              "문성민, 이경원, 김종식, 윤태린, 최경철, 한현우, Hierarchical Network Visualization Approach to Power Mechanism in Medieval Joseon Korea , 41st Annual Meeting of the Social Science History Association , pp.1 -10 (Nov, 2016)",
              "문성민, 이경원. (2016). 통계와 시각화를 결합한 데이터 분석: 예측모형 대한 시각화 검증. 디자인융복합연구, 15(6), 195-214."
            ]
            // publications add target
            var publications_add_target =[

              "Ha, H., Han, H., & Lee, K. (2020). A visualization system for exploring logo trend and design shape patterns. Applied Sciences, 10(13), 4579.",
              "Lee, S., & Park, J. H. (2019). Quality over Quantity: A Lineage-Survival Strategy of Elite Families in Premodern Korea. Social Science History, 43(1), 31-61.",
              "Ha, H., Mun, S., Choi, G., Hong, E., Lee, S., & Lee, K. (2019). Visual Analysis on the Political Orientation of Historical Characters in the Joseon Dynasty: Focusing on Seo, Geojeong. Archives of Design Research, 32(1), 147-160.",
              "Kim, M., Lee, D. G., & Shin, H. (2019). Semi-supervised learning for hierarchically structured networks. Pattern Recognition, 95, 191-200.",
              "Ha, H., Han, H., Mun, S., Bae, S., Lee, J., & Lee, K. (2019). An improved study of multilevel semantic network visualization for analyzing sentiment word of movie review data. Applied Sciences, 9(12), 2419.",
              "Ha, H., Lee, J., Han, H., Bae, S., Son, S., Hong, C., ... & Lee, K. (2019). Dementia Patient Segmentation Using EMR Data Visualization: A Design Study. International Journal of Environmental Research and Public Health, 16(18), 3438.",
              "Karim, R. M., Kwon, O. H., Park, C., & Lee, K. (2019). A study of colormaps in network visualization. Applied Sciences, 9(20), 4228.",
              "Lee, D. G., Lee, S., Kim, M., & Shin, H. (2018). Historical inference based on semi-supervised learning. Expert Systems with Applications, 106, 121-131.",

              ]

            var publications_add =[
              "https://www.mdpi.com/2076-3417/10/13/4579/pdf",
              "http://jhp.snu.ac.kr/data/Quality.pdf",
              "https://pdfs.semanticscholar.org/f9db/4127b7f847f236900ca14babb0ad86d7ec6c.pdf?_ga=2.88271007.524382636.1644210805-565369925.1644210805",
              "https://reader.elsevier.com/reader/sd/pii/S0031320319302407?token=DEE1505DF96225DB0513F2F9A2D59E19A8C1EB2542628831FD80A3C0FDE0EC0166E0EE5C0753E1361AE09915162BC2B1&originRegion=us-east-1&originCreation=20220207053911",
              "https://www.mdpi.com/2076-3417/9/12/2419/pdf",
              "https://www.mdpi.com/1660-4601/16/18/3438/pdf",
              "https://www.mdpi.com/2076-3417/9/20/4228/pdf",
              "https://www.sciencedirect.com/science/article/pii/S0957417418302161",
              ]




            // publications elements add
            var publication_adds_num = 0;

            for (var i = 0; i < publications_ele.length; i++) {
              if (publications_ele[i] == publications_add_target[publication_adds_num]) {
                $(".publications_elements").append('<li><div class="publications_num">'+(i+1)+"."+'</div><a class="publications_a" href="'+publications_add[publication_adds_num]+'">'+publications_ele[i]+'</a></li>');
                publication_adds_num++;
              }
              else{
                $(".publications_elements").append('<li><div class="publications_num">'+(i+1)+"."+'</div><a class="publications_a">'+publications_ele[i]+'</a></li>');
              }
            }

});
