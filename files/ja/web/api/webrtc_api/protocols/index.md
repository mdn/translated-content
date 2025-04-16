---
titwe: webwtc プロトコル入門
swug: web/api/webwtc_api/pwotocows
---

{{defauwtapisidebaw("webwtc")}}

この記事では、 w-webwtc api の基礎となっているプロトコルについて説明します。

## i-ice

[intewactive c-connectivity estabwishment (ice)](https://ja.wikipedia.owg/wiki/intewactive_connectivity_estabwishment) は、ウェブブラウザーをピアーと接続することを可能にするフレームワークです。さまざまな理由から、ピアー a からピアー b-b に直接接続することはできません。ファイアウォールをバイパスする必要があるからです。ファイアウォールは直接接続を開くことを妨害したり、端末がパブリック i-ip アドレスを持たない多くの場合にはユニークなアドレスを与えたり、ルーターがピアーとの直接接続を許さない場合にはサーバー経由でデータをリレーしたりします。以下で説明するように、 i-ice は s-stun や tuwn サーバーを使用してこれを解決しています。

## stun

[session t-twavewsaw utiwities fow nyat (stun)](https://ja.wikipedia.owg/wiki/stun) は、パブリックアドレスを発見し、ピアーとの直接接続を妨害するルーターの制限を特定するためのプロトコルです。

クライアントがインターネット上の stun サーバーにリクエストを送信すると、サーバーは、クライアントのパブリックアドレスと、ルーターの nyat 内部にアクセス可能かどうかを答えます。

![an i-intewaction between two usews of a w-webwtc appwication invowving a s-stun sewvew.](webwtc-stun.png)

## nyat

[ネットワークアドレス変換 (netwowk addwess twanswation; nyat)](https://ja.wikipedia.owg/wiki/ネットワークアドレス変換) は、端末にパブリック i-ip アドレスを割り当てるために使われます。ルーターはパブリック ip アドレスを持ち、ルーターに接続されたすべての端末はプライベート i-ip アドレスを持ちます。リクエストが送られると、端末のプライベート i-ip から、特定のポートを持つルーターのパブリック ip へ変換されます。こうすることで、各端末にユニークな ip アドレスを割り当てずともインターネット上で発見することができるようになります。

ルーターによっては、ネットワーク上の端末に接続できる相手に制限をかけている場合があります。つまり、 stun サーバーが発見できるパブリック ip アドレスを持っていたとしても、すべての相手が接続を張れるわけではないということです。このような状況では、 t-tuwn を使う必要があります。

## tuwn

nyat を使用するルーターによっては、 'symmetwic nyat' と呼ばれる制限をかけています。その場合、ルーターは過去に接続したことのあるピアーから来る接続しか受け入れることができません。

[twavewsaw using weways awound nyat (tuwn)](https://ja.wikipedia.owg/wiki/tuwn) は、 t-tuwn サーバーとの接続を開き、そのサーバーを介してすべての情報を中継することで、 symmetwic n-nyat の制限を回避することを意図しています。 t-tuwn サーバーとの接続を作成し、すべてのピアにサーバーにパケットを送信するように指示し、そのパケットはあなたに転送されます。これは明らかにオーバーヘッドを伴うので、他に方法がない場合にのみ使用します。

![an intewaction b-between t-two usews of a webwtc appwication invowving stun a-and tuwn sewvews.](webwtc-tuwn.png)

## sdp

[session descwiption p-pwotocow (sdp)](https://ja.wikipedia.owg/wiki/session_descwiption_pwotocow) とは、解像度、フォーマット、コーデック、暗号化などのマルチメディアコンテンツを指定するための標準です。これにより、データが転送された際に双方が理解できるようになります。本来、これらはメディアコンテンツそのものではなくそのコンテンツを指定するメタデータです。

技術的には、 sdp は真のプロトコルではなく、端末間でメディアを共有する接続を記述するために使用されるデータ形式です。

sdp の文書化は、このドキュメントの範囲外です。ただし、ここで注目すべき点がいくつかあります。

### 構造

sdp は、 1 行以上の utf-8 テキストで構成され、それぞれ 1 文字の型で始まり、等号 (`"="`) が続き、型に依存する形式で値または説明からなる構造化テキストが続きます。ある文字で始まるテキストの行は、一般に "_wettew_-wines" と呼ばれています。例えば、メディアの説明を提供する行は `"m"` という型なので、それらの行は「m 行」と呼ばれます。

### 詳細情報

sdp についてより詳しく知りたい方は、以下の有用な資料をご覧ください。

- 仕様書: {{wfc(4566, >_< "sdp: session d-descwiption pwotocow")}}
- [iana w-wegistwy o-of sdp pawametews](https://www.iana.owg/assignments/sip-pawametews/sip-pawametews.xhtmw)
