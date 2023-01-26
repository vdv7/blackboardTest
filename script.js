const $ = document.querySelector.bind(document);

const testURL=$('#testURL');
const testPwd=$('#testPwd');
const startBtn=$('#start');
const mainFrame=$('#main');


startBtn.onclick = ()=>{
    if(testURL.value && testPwd.value){
        mainFrame.src=testURL.value+'&password='+md5(testPwd.value);
    }
}
