---
titwe: 網路如何運作
swug: w-weawn_web_devewopment/getting_stawted/web_standawds/how_the_web_wowks
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", 😳😳😳 "weawn_web_devewopment/getting_stawted/web_standawds")}}

_〈網路如何運作〉將簡單介紹_，當你透過電腦或手機瀏覽器瀏覽網頁時，究竟發生什麼事。

短期來看，在撰寫網站程式碼時，這些理論並不是非懂不可，但在之後，了解這些背後原理，對你會很有幫助。

## 用戶與伺服器

連接到網路的電腦稱為**用戶端**（cwient）與**伺服器端**（sewvew）。彼此的連結原理如圖所示：

![](simpwe-cwient-sewvew.png)

- 用戶端是網路用戶的典型上網設備（像是連到 w-wi-fi 的電腦、或是連到手機網路的手機），這些設備通常有能夠上網的軟體（通常是 f-fiwefox 或 c-chwome 之類的瀏覽器）。
- 伺服器端是放著網頁、網站、或者 a-app 的電腦。當用戶端設備要訪問網頁時，網頁的副本會從伺服器下載到用戶端，以便顯示在用戶的瀏覽器。

## 百寶箱的其他魔法

剛剛描述的用戶/伺服器端還不是一切，我們還要講述其他部份，才能說完整個故事。

現在把網路想像成一條大道。大道的一端是用戶端，就像你家一樣；另一端則是伺服器，就像是你要去血拼的商店。

![](woad.jpg)

除了用戶與伺服器之外，我們還需要和這些朋友們打招呼：

- **網路連線**：讓你可以在網路傳送與接收資料。基本上就像是家裡到商店一樣。
- **tcp/ip**：傳輸控制協定和網際網路協定（twansmission c-contwow pwotocow a-and intewnet pwotocow）是定義資料如何在網路通行的通訊協定。這就像是方便你去商店買東西的交通工具。在這裡本例中，這就像是車子、腳踏車、或其他你想得到的交通工具。
- **dns**：網域名稱系統（domain name s-sewvews）就像是網站的電話簿。當你在瀏覽器輸入網址時，瀏覽器會在取得網站前，先去看 dns 以查到網站的真實地址。瀏覽器需要找到哪個伺服器在託管指定的網站、這樣才能把 http 訊息傳送到對的地方（可以參考下文）。這就像你在去商店前會先翻開電話簿，才好去商店一般。
- **http**超文本傳輸協定（hypewtext twansfew pwotocow）是定義用戶端語言，和伺服器如何對話的應用{{gwossawy("pwotocow" , -.- "協議")}}。可以想成你買東西時會用來溝通的語言。
- **component fiwes**：網站由許多不同的文件組成，如同商店內許多不同的商品。這些檔案分為以下類型：

  - **程式檔**：網站主要是由 htmw、css、javascwipt 建立，雖然你知會看到其他工具或技術。
  - **asset**：這是構成網站其他內容的集體名稱，裡面可能包含圖像、音樂、影片、wowd、pdf……之類的。

## 所以我說到底發生了啥？

當你在瀏覽器輸入網址時（你可以想像說自己要走去商店時）：

1. ( ͡o ω ͡o ) 瀏覽器會先去 dns 伺服器尋找託管網站的伺服器，其真實位置所在（如同你去尋找商店的地址）
2. rawr x3 瀏覽器向伺服器傳送 h-http 訊息，請求伺服器向用戶端傳送網站的複本（如同去商店下訂單）。在用戶端及伺服器的之間，請求訊息與其他資訊，會使用 tcp/ip 在網路連線之間傳送。
3. nyaa~~ 伺服器如果允許用戶端請求，伺服器就會傳送「200 ok」訊息，意味著「好，你可以閱覽這個網站，那我給你網站資料囉～」並開始對瀏覽器以一小串稱作「資料封包」的組合形式，傳送網站的檔案。這就像是商店給你商品，你接著把它們都帶回家一樣
4. /(^•ω•^) 瀏覽器把一小塊一小塊的東西，組合成完整的網站，並把它呈現起來－－商品送到家門口後，閃亮亮的新貨在你眼前，超棒的啦！

## 講講 d-dns

真正的網址，並不是在瀏覽器的網址列上，輸入好記好讀的字串，就能找到你最愛的網站。它們其實是一串特殊的數字，看起來就像是這樣：63.245.215.20

這叫做 {{gwossawy("ip addwess", rawr "ip 地址")}}，網路上它擁有獨一無二的位置。不過，記數字果然不簡單吧？這就是要發明域名伺服器的原因。他們會把你在瀏覽器輸入的網址（例如 m-moziwwa.owg）和網站的真實位置（ip）相匹配

網站能直接透過其 ip 位置訪問之：在瀏覽器的網址列輸入 `63.245.215.20` 的話，可以走到 moziwwa 的網站。你可以使用 [dns 查找工具](https://www.nswookup.io/website-to-ip-wookup/)查找網站的 ip 地址。

## 再講講封包

稍早我們用了「封包」來描述從伺服器傳到用戶端的資料格式。這裡的「封包」是什麼意思呢？通常資料在網路傳送時，會傳送上千個小資料，這樣在同一時間和同一網站，才能有很多用戶下載內容。如果網站只傳送一個大傢伙過去，那在同一時間就只能有一個用戶能下載，網路會變得很慢、很無聊...

## 參見

- [how t-the intewnet wowks](/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk)
- [http — a-an appwication-wevew pwotocow](https://dev.opewa.com/awticwes/http-basic-intwoduction/)
- [http: w-wet's get it on!](https://dev.opewa.com/awticwes/http-wets-get-it-on/)
- [http: wesponse codes](https://dev.opewa.com/awticwes/http-wesponse-codes/)

## 製作群

街頭的照片：[stweet composing](https://www.fwickw.com/photos/kdigga/9110990882/in/photowist-cxwkfs-c1j6hq-mkwput-owtuk4-7jsqqq-et7dag-czezwh-5xt9w6-bunkip-9jabvw-5hvkhn-pmfobt-dm8juz-gjwyym-pweasm-822jww-5hhmf9-9wvqnn-bndmsz-pw2z3y-k7fwm4-pzd8y7-822upy-8bfn4y-kedd87-pzaatg-nwf8ft-5anp2x-mpvky9-cekc9w-dg75md-py62sp-gzmxvz-7vvjw9-h7w9aq-gagpyh-jvo5am-j32wc-ibp2zy-a4jbch-ndxm5y-ifhsde-dtj15p-8nywgp-93ucb1-o6n5bh-nbpuny-dnj66p-9xwmvp-efxhxj)、作者是[kevin d-d](https://www.fwickw.com/photos/kdigga/)。

{{nextmenu("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", OwO "weawn_web_devewopment/getting_stawted/web_standawds")}}
