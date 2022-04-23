/* Inspired and supported by MAKA (Tom Royal) */
// selector.style.fontFamily = "sans-serif";
var elements = document.getElementsByTagName('*');
function replaceWord(original, newword) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var old =  new RegExp('\\b'+ original +'\\b', 'i');
                // var newer = new RegExp('\\b'+ newword +'\\b.');
                var replacedText = text.replace(old, newword);
                //var replacedText = text.toLowerCase().replace(original, newword);
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
chrome.storage.local.get({
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
    lvl5: false,
    lvl6: false,
    lvl7: false,
}, function (items) {
      if(items.lvl1){
      		replaceWord("you","你");
      		replaceWord("good","好");
      		replaceWord("Hello","你好");
      		replaceWord("Hi","你好");
      		replaceWord("Goodbye","再见")
      		replaceWord("Bye","再见");
      		replaceWord("very","很");
      		replaceWord("happy","高兴");
      		replaceWord("recognize","认识");
      		replaceWord("also","也");
      		replaceWord("busy","忙");
      		replaceWord("morning","早上");
      		replaceWord("early","早");
      		replaceWord("up","上");
      		replaceWord("good morning","早安");
      		replaceWord("good evening","晚安");
      		replaceWord("one moment","一会儿");
      		replaceWord("a while","一会儿");
      		replaceWord("will","会");
      		replaceWord("congrats","恭喜");
      		replaceWord("congratulations","恭喜");
      		replaceWord("red pocket","红包");
      		replaceWord("party","聚会");
      		replaceWord("gathering","聚会");
      		replaceWord("get rich","发财");
      		replaceWord("wealth","财");

      };
      if(items.lvl2){
        replaceWord("zero","零");
      	replaceWord("one","一");
      	replaceWord("two","二");
      	replaceWord("three","三");
      	replaceWord("four","四");
      	replaceWord("five","五");
      	replaceWord("six","六");
      	replaceWord("seven","七");
      	replaceWord("eight","八");
      	replaceWord("nine","九");
      	replaceWord("ten","十");
        replaceWord("0","零");
      	// replaceWord("1","一");
      	replaceWord("2","二");
      	replaceWord("3","三");
      	replaceWord("4","四");
      	replaceWord("5","五");
      	replaceWord("6","六");
      	replaceWord("7","七");
      	replaceWord("8","八");
      	replaceWord("9","九");
      	replaceWord("10","十");
        replaceWord("yuan","元");
        replaceWord("hundred","百");
      };
      if(items.lvl3){
      		replaceWord("I","我");
          replaceWord("me","我");
      		replaceWord("shout","叫");
      		replaceWord("call","叫");
      		replaceWord("plum","李");
      		replaceWord("my","我的");
          replaceWord("mine","我的");
      		replaceWord("name","名字");
      		replaceWord("what","什么");
      		replaceWord("word","字");
      		replaceWord("character","字");
      		replaceWord("letter","字");
      		replaceWord("king","王");
      };
      if(items.lvl4){
      	replaceWord("eat","吃");
      	replaceWord("food","饭");
      	replaceWord("rice","饭");
      	replaceWord("fish","鱼");
      	replaceWord("noodles","面");
      	replaceWord("drink","喝");
      	replaceWord("water","水");
      	replaceWord("tea","茶");
      	// replaceWord("not","不是");
        replaceWord("is not","不是");
        replaceWord("it is not","不是");
        replaceWord("it's not","不是");
      	replaceWord("yes","是的");
      };
      if(items.lvl5){
      	replaceWord("is","是");
        replaceWord("it is","是");
        replaceWord("it's","是");
        replaceWord("it is me","是我");
        replaceWord("it's me","是我");
        replaceWord("I'm","我是");
        replaceWord("I am","我是");
      	replaceWord("them","他");
      	replaceWord("he","他");
      	replaceWord("her","他");
        replaceWord("his","他的");
        replaceWord("hers","他的");
      	replaceWord("student","学生");
      	replaceWord("learn","学");
      	replaceWord("give birth","生");
      	replaceWord("gave birth","生");
      	replaceWord("you guys","你们");
      	replaceWord("you all","你们");
      	replaceWord("y'all","你们");
        replaceWord("your","你们的");
      	replaceWord("we","我们的");
        replaceWord("us","我们的");
        replaceWord("our","我们的");
        replaceWord("them","他们");
        replaceWord("they","他们");
        replaceWord("their","他们的");
        replaceWord("theirs","他们的");
        replaceWord("teacher","老师");
        replaceWord("doctor","医生");
        replaceWord("old","老");
      };
      if(items.lvl6){
      	replaceWord("telephone","电话");
      	replaceWord("phone","电话");
      	replaceWord("cellphone","电话");
      	replaceWord("electricity","电");
      	replaceWord("dialect","话");
      	replaceWord("speech","话");
      	replaceWord("words","话");
      	replaceWord("phone number","号码");
      	replaceWord("how much","多少");
      	replaceWord("amount","多少");
      	replaceWord("as much as","多少");
      	replaceWord("many","多");
        replaceWord("often","多");
        replaceWord("a lot","多");
        replaceWord("few","少");
        replaceWord("less","少");
        replaceWord("least","至少");
      };

      if(items.lvl7){
      	replaceWord("China","中国");
      	replaceWord("person","人");
      	replaceWord("people","人");
      	replaceWord("middle","中");
      	replaceWord("country","国");
      	replaceWord("UK","英国");
      	replaceWord("Britain","英国");
      	replaceWord("USA","美国");
      	replaceWord("US","美国");
      	replaceWord("United States","美国");
      	replaceWord("America","美国");
      	replaceWord("pretty","美");
        replaceWord("all","都");
        replaceWord("right","对");
        replaceWord("Canada","加拿大");
        replaceWord("hold","拿");
        replaceWord("add","加");
        replaceWord("big","大");
        replaceWord("large","大");
      };
    document.addEventListener('DOMContentLoaded', meme(memeList), false);

});


// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoMayMays") {
        undomeme();
    };
});
