!function () {
    let content = `.pikachu {
        height: 240px;
        position: relative;
    }
    .nose {
        width: 0;
        border: 10px solid transparent;
        border-radius: 50%;
        border-top-color: black;
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -10px;
    }
    .eyes {
        position: absolute;
        width: 64px;
        height: 64px;
        background-color: #2e2e2e;
        border: 3px solid #000000;
        border-radius: 50%;
    }
    .eyes.left {
        top:0;
        left: 50%;
        margin-left: -152px;
    }
    .eyes.right {
        top:0;
        right: 50%;
        margin-right: -152px;
    }
    .eyes::before {
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        background-color: #ffffff;
        border: 3px solid black;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: 8px;
    }
    .face {
        width: 90px;
        height: 90px;
        background-color: #ff0000;
        border: 3px solid black;
        border-radius: 50%;
        position: absolute;
    }
    .face.left {
        top: 110px;
        left: 50%;
        margin-left: -210px;
    }
    .face.right {
        top: 110px;
        right: 50%;
        margin-right: -210px;
    }
    .upLip {
        width: 80px;
        height: 24px;
        border: 3px solid black;
        position: absolute;
        top: 70px;
        border-top: 0;
        background-color: #ffe600;
        z-index: 1;
    }
    .upLip.left {
        border-bottom-left-radius: 36px 20px;
        border-right: 0;
        transform: rotate(-15deg);
        right: 50%
    }
    .upLip.right {
        border-bottom-right-radius: 36px 20px;
        border-left: 0;
        transform: rotate(15deg);
        left: 50%
    }
    .downLip-wrapper {
        width: 200px;
        height: 170px;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -100px;
        overflow: hidden;
    }
    
    .downLip {
        width:300px;
        height: 4000px;
        background-color: #990513;
        border: 3px solid #000;
        border-radius: 150px/2000px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        overflow: hidden;
    }
    
    .downLip::before {
        content: '';
        display: block;
        width: 200px;
        height: 200px;
        background-color: #de4c78;
        border-radius: 100px;
        position: absolute;
        top:100%;
        left: 50%;
        margin-top: -135px;
        margin-left: -100px;
    }`
    writeCode('', content, f1)
    function writeCode(result, content, callbackName) {
        let n = 0
        let timerId = setTimeout(function run() {
            let code = document.querySelector('#code')
            let styleTag = document.querySelector('#styleTag')
            code.innerHTML = Prism.highlight((result + content.substr(0, n)), Prism.languages.css, 'css')
            styleTag.innerHTML = result + content.substr(0, n)
            code.scrollTop = code.scrollHeight
            n += 1
            if (n < content.length) {
                timerId = setTimeout(run, duration)
            } else {
                callbackName()
            }
        }, duration)
    }
    function f1() {
        console.log('done')
    }
    var duration = 10
    $('.actions').on('click', 'button', (e) => {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        switch (speed) {
            case 'slow':
                duration = 500
                break
            case 'normal':
                duration = 100
                break
            case 'fast':
                duration = 10
                break
        }
        $button.addClass('active')
        .siblings('.active').removeClass('active')
    })
}()
