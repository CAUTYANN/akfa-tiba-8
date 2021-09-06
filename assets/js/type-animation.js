const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 100 * ++index);
    });
  }
  
  typing('#typing', "廃墟になった遊園地、主人公は三人で肝試しに来ていた。友達と歩いていると、突然観覧車の窓ガラスが大きく割れ、驚いて逃げ出してしまったことで友達と逸れてしまった！　するととてもゆっくりだが観覧車が回っているようだ。とにかくみんなを探さなければ。。。");
