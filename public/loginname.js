//로그인시/로그아웃시/새로고침시 실행됨.

if(localStorage.getItem('user') != null ){
    var localSt = localStorage.getItem('user');
    $('#userName').html(JSON.parse(localSt).displayName+"님");
}

firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
            console.log(user)
            console.log(user.uid)
            console.log(user.displayName)
            localStorage.setItem('user', JSON.stringify(user))

            if(user != null){
                $('#top-login').css("display","none");
                $('#logout').css("display","block");
            }
    }
})

$('#logout').click(function(){
    firebase.auth().signOut()

    localStorage.removeItem('user');

    $('#top-login').css("display","block");
    $('#logout').css("display","none");
    $('#userName').css("display","none");
})