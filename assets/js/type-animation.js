const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 100 * ++index);
    });
  }

  const text = "・・・山奥にある廃墟となった遊園地放課後に遊園地から子供の奇妙な叫び声が聞こえてくるという噂があった。"/
  "噂の出どころはわからないが私たちは面白半分でその遊園地肝試しをすることになった"/
  "私たちは遊園地に入るとそこは寂れた遊具や割れたガラスが散乱していた"/
  "私は遊園地の奥へ奥へと進むうちにみんなと逸れてしまった"/
  "「どうしよう、みんなと逸れちゃった。。」"/
  " みんなを探し出し、遊園地から脱出しろ！"
  
  typing('#typing', text);
