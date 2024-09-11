function submit(url){
    // fetch giup gui yeu cau toi file php
    console.log("bai duoc click")
    document.getElementById('right').innerHTML = 'Dang tai...'
    fetch(url, {
        method: 'POST', //gui yeu cau post
    })
        .then(response => {
            if(!response.ok){
                throw new Error('Loi mang!');
            }
            // lay noi dung tu php o dang txt
            return response.text(); 
        })
        .then(data => {
            // dua noi dung vao phan tu data_php
            console.log("du lieu nhan duoc", data);
            document.getElementById('right').innerHTML = data;
        })
        .catch(error => {
            console.error('co gi do vua xay ra : ', error);
            document.getElementById('right').innerHTML = 'noi dung da bien mat';
        });
}
function showChoices(){
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}
function selection(option){
    let url = '';
    if(option === 'a'){
        url='bai2_1.php';
    }else if(option ==='b'){
        url = 'bai2_2.php';
    }
    if(url){
        submit(url);
    }
}