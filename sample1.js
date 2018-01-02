let count = 0
 
//カウントアップする関数 countUp の定義
function countUp () {
    //カウンタに 1 を加算
    count++
    //カウンタの値を HTML 内の counter に表示
    document.getElementById("counter").innerHTML=count
}

//カウントダウンする関数 countDown の定義
function countDown () {
    //カウンタから 1 を減算
    count--
    //カウンタの値を HTML 内の counter に表示
    document.getElementById("counter").innerHTML=count
}

//ページロード時に実行
window.onload = function () {
    //カウンタの値を HTML 内の counter に表示
    document.getElementById("counter").innerHTML=count
    //「+」クリック時に関数 countUp を実行
    document.getElementById("plus").addEventListener('click',
()=>{countUp();}, false)
    //「-」クリック時に関数 countDown を実行
    document.getElementById("minus").addEventListener('click',
()=>{countDown();}, false)
};
