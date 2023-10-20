function event_winner_popup() {
	$('.pop_dimm').off('click'); //팝업 딤 Click Event Handler 초기화
	
	//당첨자 조회 팝업 버튼 클릭 이벤트
	$('a.ev_seq_link1').on('click', function(){
		$('.smt_evenprizewinner_popUp').fadeIn(); //당첨자 조회 팝업창 노출
		$("dl.prizewinner_indfo").empty(); // 당첨자 데이터 삭제
		$('dl.prizewinner_indfo').hide(); //유의사항 팝업 비노출
		$('.pop_dimm').show(); //배경 딤처리
		$("#label_q").focus(); //아이디 입력란 포커스
	});
	
	//당첨자 조회 팝업 닫기 이벤트
	$('.smt_evenprizewinner_popUp p.close a, p.btn_pz_close a').on('click', function(){
		$('.smt_evenprizewinner_popUp').hide();
		$('.smt_evenprizewinner_popUp, .pop_dimm').fadeOut();
		$pupupinit();
	});
	
	//당첨자 조회 버튼 클릭 이벤트
	$(".btn_inqy").on("click", $prizewinner);
	
	//당첨자 조회 버튼 엔터키 이벤트
	$("#label_q").on("keydown", function(e){
		if (e.keyCode == 13) {
			$(".btn_inqy").focus();
			$prizewinner();
		}
	});
	
}

function event_winner_popup_end() {

	//당첨자 조회 팝업 버튼 클릭 이벤트
	$('a.ev_seq_link1').on('click', function(){
		alert("추가 별 적립 대상 확인이 종료되었습니다.");
	});
}


/**
 *  @description: 이벤트 당첨자 대상 조회
 */
function $prizewinner() {
	var winner = $.trim($("#label_q").val());
	
	$("dl.prizewinner_indfo").empty(); // 이전 당첨자 검색 데이터 삭제
	
	if (winner == "") {
		alert("당첨자 조회할 아이디를 입력하세요.");
		$("#label_q").focus();
		return;
	}
	
	// YES OR NO 이벤트 코드
	var event_id = "";

	if (window.$PRO_SEQ=='1998'){
		event_id = 'YESNO_220502_09';
	}else if(window.$PRO_SEQ=='1846'){
		event_id = 'YESNO_210528_06';
	}else if(window.$PRO_SEQ=='1873'){
		event_id = 'YESNO_210914_08';
	}

	var objParam = {
			event_id: event_id,
			user_id: winner
	};
	
	__ajaxCall("/whats_new/getWinnerCheck.do", objParam, true, "JSON", "POST", function(res){
		winner = winner.toUpperCase();
		var winList = "";
		var winCnt = 0;
		
		if (res.result_code == 'SUCCESS') {
			
			winnerList = res.data;
			winCnt = winnerList.length;
			
			$('.winList').empty();
			$(".what").removeClass('no');
			$('.btn_smt_zimgDouble').show();
			// $('dl.prizewinner_indfo').hide(); //토너먼트 정답 리스트 // 20220429 삭제
			
			// 20220429 수정
			var tournamentCnt = winnerList.length > 0 ? winnerList[0].rank : '';
			try {
				tournamentCnt = tournamentCnt.charCodeAt(0) ? tournamentCnt.charCodeAt(0)-64: '';
			} catch (e) {
				alert('처리에 실패하였습니다. 다시 한번 시도해주십시오.')
			}
			
			//당첨되지 않았을때
			if (winCnt == 0) {
				$(".who").html('<span id="winner"></span>님, 아쉽지만');
				$(".what").addClass('no').html('고객님은 추가 별 \'<span class="fontGreen">6</span>\'개 적립 대상자가 아닙니다.'); // 20220429 수정
				if (window.$PRO_SEQ=='1846') {
					$('.winList').html('<li><img src="//image.istarbucks.co.kr/img/event/2021/20210518_lose_img_2.jpg" alt="다음 기회에 참여해 주세요."></li>');// 프라푸치노 이벤트 이미지 
				} else if (window.$PRO_SEQ=='1873') {
					$('.winList').html('<li><img src="//image.istarbucks.co.kr/img/event/2021/YesorNoSandwich_pop_not_210913.jpg" alt="다음 기회에 참여해 주세요."></li>'); // 샌드위치 이벤트 이미지
				} else { // 20220429 추가 (window.$PRO_SEQ=='1998') 이후 수정 요망
					$('.winList').html('<li>PICK YOUR DRINK 이벤트에 보내주신 관심과 성원에 감사드립니다.</li>'); // PICK YOUR DRINK 이벤트
				}
				$("#winner").text(winner);
			//당첨됐을때
			} else {
				// window.getAnwerList(winner) // YES OR NO 이벤트에서만 사용 // 20220429 삭제
				
				// 20220429 삭제
				/* var HTML = '';
					HTML += '<li>';
					
					if  (window.$PRO_SEQ=='1846')  {
						HTML += '	<img src="https://image.istarbucks.co.kr/img/event/2021/20210518_lose_img_1.jpg" alt="투표 결과가 일치하는 개수 만큼 추가 별을 6/3(목) 고객님의 계정으로 적립해 드립니다.">';  // 프라푸치노 이벤트 이미지
					}else {
						HTML += '	<img src="https://image.istarbucks.co.kr/img/event/2021/YesorNoSandwich_pop_210913.jpg" alt="투표 결과가 일치하는 개수 만큼 추가 별을 9/24(금) 고객님의 계정으로 적립해 드립니다.">'; // 샌드위치 이벤트 이미지
					} 
					HTML += '</li>'; */
				
				// s:20220429 수정
				$(".who").html('<span id="winner"></span>님, <strong>축하합니다.</strong>');
				$(".what").html('<span>PICK YOUR DRINK 이벤트에<br/>참여해 주셔서 감사합니다.</span><br/><br/><span>고객님은 추가 별 \'<span class="fontGreen">6</span>\'개 적립 대상자 입니다.</span>');
				$(".winList").append('<li>추가 별은 5/11(수) 고객님의 계정으로 적립해 드립니다. (총 6단계의 토너먼트에 모두 참여해주신 고객님께 6개의 추가별이 지급됩니다.)</li>');
				// e:20220429 수정
				
				// $('span.fontGreen').text(Number(tournamentCnt)); // 20220429 삭제
				$("#winner").text(winner);
			}
		}
		 else {
			alert('통신오류가 발생했습니다.\n지속될 시 관리자에게 문의 바랍니다.');
		}
	});
}

// popup 노출
function $pupupinit() {
	$("#label_q").val('');
	$("dl.prizewinner_indfo info_etc_st01").empty(); // 당첨자 데이터 삭제
	$(".btn_smt_zimgDouble").hide();
}
	
/* 20220429 삭제
 * @description: yes or no 정답 일치 목록 조회, 이벤트 이후 삭제(필수)
 * @param winner
 * 
function getAnwerList(winner) {
	var param = {smUserId : winner}
	__ajaxCall("/whats_new/getYesNoAnswerList.do", param, true, "JSON", "POST", function(response) {
		if ( response.result_code=='SUCCESS') {
				
				$("dl.prizewinner_indfo").html('');
				if (response.data.length < 1) return;
				
				$("dl.prizewinner_indfo").html('<dt>&lt;고객님이 투표하신 토너먼트 정답 리스트&gt;</dt>');
				
				var answerList = "";
				_data = response.data;
				$.each(_data, function(idx, item){
					var title = item.scsTitle;
					title = title ? title.split('(')[1] : '';
					title = title.slice(0, 3);
					var answer = item.sceExample ;
					answerList += "<dd>"+title+"&nbsp;:</span><span class='loseTxt'>" + answer + "</dd>";
				});
				$("dl.prizewinner_indfo").append(answerList);
				$("dl.prizewinner_indfo").show();
		} else {
			alert(response.alert_msg);
		}
	});
} */
	

	
	
	
	
	