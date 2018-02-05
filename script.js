$(document).ready(function() {
    
    var songSet = [
       
        //아직까진 여기에 악보사이트 입력하기!!! ㅜㅠ
        "http://cfile25.uf.tistory.com/image/26583B3C56B2F10F018FC5",
        
        "http://cfile232.uf.daum.net/image/203608344DFEE22708D098",
        
        "http://blogfiles.naver.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg",
        
        "http://blogfiles.naver.net/20160524_110/lordship46_146407304340859mkt_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-002-002.jpg"
        
        
        
    ]
    
    for (songs in songSet) {
        $('.sheet-box').append(`<div class ="row sheet-row"><div class="col-sm-2"></div><div class="col-sm-8"><div class="sheet-placeholder"> <img src="${songSet[songs]}" width="100%"></div></div><div class="col-sm-2"></div></div>`);    
    }
    
    
});

var test;