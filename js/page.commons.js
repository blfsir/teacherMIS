//ҳ����������ȵ�����ѡ��
$(document).ready(function(e) {
	for (i = new Date().getFullYear(); i > 2000; i--)
	{
		$('.yearpicker').append($('<option />').val(i).html(i));
	} 
});