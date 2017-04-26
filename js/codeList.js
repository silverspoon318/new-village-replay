$(function() {
	attachEvent();

	$("#codeList").dataTable({
		paging: false
	});
});

function attachEvent() {
	$("button.video-move").click(function() {
		var code = $(this).parents("tr").first().attr("code");
		if (confirm("이동하시겠습니까?")) {
			location.href = "replay/" + code + ".html";
			// remove(code);
		}
	});
}
//
// function remove(code) {
// 	$.ajax({
// 		url:         '/ajax/code/remove?category=' + pageVars.category + '&code=' + code,
// 		type:        'DELETE',
// 		dataType:    'json',
// 		cache:       false,
// 		//contentType: 'application/json; charset=utf-8',
// 		processData: false,
// 		complete: function() {
// 		},
// 		success: function(resp) {
// 			console.log(resp);
// 			if (resp && resp.code == 0) {
// 				alert("삭제 완료");
// 				location.reload();
// 			} else {
// 				alert("삭제를 실패 했습니다. 다시 시도 해주세요.");
// 			}
// 		},
// 		error: function() {
// 			alert("삭제를 실패 했습니다. 다시 시도 해주세요.");
// 		}
// 	});
// }
