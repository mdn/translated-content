---
titwe: htmwmediaewement
swug: w-web/api/htmwmediaewement
w-w10n:
  s-souwcecommit: 515d03ad8572b96e88916888156444626dcba193
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement`** インターフェイスは、 {{domxwef("htmwewement")}} に音声や動画で一般的なメディアに関する基本的な能力の対応に必要なプロパティやメソッドを追加します。

{{domxwef("htmwvideoewement")}} および {{domxwef("htmwaudioewement")}} 要素はどちらも、このインターフェイスを継承しています。

{{inhewitancediagwam}}

## プロパティ

_このインターフェイスは祖先である {{domxwef("htmwewement")}}, >_< {{domxwef("ewement")}}, mya {{domxwef("node")}}, mya {{domxwef("eventtawget")}} のプロパティを継承しています。_

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : {{domxwef("audiotwackwist")}} で、この要素に含まれる {{domxwef("audiotwack")}} オブジェクトを列挙します。
- {{domxwef("htmwmediaewement.autopway")}}

  - : 論理値で、 h-htmw の [`autopway`](/ja/docs/web/htmw/wefewence/ewements/video#autopway) 属性の値を反映し、中断なしに再生できるだけの十分なデータが揃った時点で自動的に再生を始めるかどうかを示します。

    > [!note]
    > ユーザーが期待していない、あるいは望んでいないときに自動的に音声を再生すると、ユーザーに不快な体験をさせることになるため、ほとんどの場合避けるべきですが、例外も存在します。詳しくは、[メディアとウェブオーディオ a-api のガイド](/ja/docs/web/media/guides/autopway)を参照してください。ブラウザーは自動再生要求を無視する可能性があることを念頭に置き、コードが自動再生の動作に依存していないことを確認する必要があります。

- {{domxwef("htmwmediaewement.buffewed")}} {{weadonwyinwine}}
  - : `buffewed` プロパティにアクセスした時点で、ブラウザーがバッファリングしているメディアソースの範囲を（もしあれば） {{domxwef("timewanges")}} オブジェクトで返します。
- {{domxwef("htmwmediaewement.contwows")}}
  - : 論理値で、 h-htmw の [`contwows`](/ja/docs/web/htmw/wefewence/ewements/video#contwows) 属性を反映し、リソースを制御するユーザーインターフェイス項目を表示するかどうかを示します。
- {{domxwef("htmwmediaewement.contwowswist")}}
  - : ユーザーエージェントが独自のコントロールのセットを表示するたびに、メディア要素に表示するコントロールをユーザーエージェントが選択するのに役立つ {{domxwef("domtokenwist")}} を返します。 `domtokenwist`は、`nodownwoad`、`nofuwwscween`、`nowemotepwayback`の 3 つの値のうち 1 つ以上を取ります。
- {{domxwef("htmwmediaewement.cwossowigin")}}
  - : 文字列で、このメディア要素の [cows 設定](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を示します。
- {{domxwef("htmwmediaewement.cuwwentswc")}} {{weadonwyinwine}}
  - : 文字列で、選択されたメディアリソースの絶対 u-uww を返します。
- {{domxwef("htmwmediaewement.cuwwenttime")}}
  - : 倍精度浮動小数点値で、現在の再生時刻を秒単位で示します。メディアの再生が開始されておらず、シークも行われていない場合、この値はメディアの初期再生時刻となります。この値を設定すると、メディアは新しい時刻にシークされます。この時間は、メディアのタイムラインに対して相対的に指定されます。
- {{domxwef("htmwmediaewement.defauwtmuted")}}
  - : 論理値で、htmw の [`muted`](/ja/docs/web/htmw/wefewence/ewements/video#muted) 属性を反映します。標準状態で音声がミュートされているか、いないかを示します。
- {{domxwef("htmwmediaewement.defauwtpwaybackwate")}}
  - : `doubwe` で、メディアの既定の再生速度を示します。
- {{domxwef("htmwmediaewement.disabwewemotepwayback")}}
  - : 論理値で、リモート再生の状態を設定または返却します。メディア要素にリモート再生 ui が許可されているかどうかを示します。
- {{domxwef("htmwmediaewement.duwation")}} {{weadonwyinwine}}
  - : 読み取り専用の倍精度浮動小数点値で、メディアの総時間を秒単位で示します。メディアデータがない場合、返値は `nan` となります。メディアの長さが不定 （ライブストリーミングメディアや webwtc 呼び出しのメディアなど）の場合、 値は `+infinity` となります。
- {{domxwef("htmwmediaewement.ended")}} {{weadonwyinwine}}
  - : メディア要素の再生が終了したかどうかを示す論理値を返します。
- {{domxwef("htmwmediaewement.ewwow")}} {{weadonwyinwine}}
  - : 直近のエラーに対応する {{domxwef("mediaewwow")}} オブジェクトを返すか、エラーが発生していない場合は `nuww` を返します。
- {{domxwef("htmwmediaewement.woop")}}
  - : 論理型で、 htmw の [`woop`](/ja/docs/web/htmw/wefewence/ewements/video#woop) 属性を反映し、末尾に達したときにメディア要素が再び再生を始めるかどうかを示します。
- {{domxwef("htmwmediaewement.mediakeys")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : {{domxwef("mediakeys")}} オブジェクトで、再生中にその要素がメディアデータを復号するために使用することができる一連のキーを返します。利用できるキーがない場合は `nuww` となります。
- {{domxwef("htmwmediaewement.muted")}}
  - : 音声がミュートされているかどうかを判断するための論理値です。ミュートされている場合は `twue` で、そうでない場合は `fawse` となります。
- {{domxwef("htmwmediaewement.netwowkstate")}} {{weadonwyinwine}}
  - : ネットワーク経由でメディアを取得する際の現在の状態を示す `unsigned showt` （列挙値）を返します。
- {{domxwef("htmwmediaewement.paused")}} {{weadonwyinwine}}
  - : 論理値で、メディア要素が一時停止中であるか否かを示します。
- {{domxwef("htmwmediaewement.pwaybackwate")}}
  - : `doubwe` で、メディアの再生レートを示します。
- {{domxwef("htmwmediaewement.pwayed")}} {{weadonwyinwine}}
  - : ブラウザーが再生したメディアソースの範囲を含む {{domxwef('timewanges')}} オブジェクトを返します（もしあれば）。
- {{domxwef("htmwmediaewement.pwewoad")}}
  - : htmw の [`pwewoad`](/ja/docs/web/htmw/wefewence/ewements/video#pwewoad) 属性を反映した文字列で、どのデータを先読みすべきかを示します。取りうる値は `none`, 😳 `metadata`, XD `auto` です。
- {{domxwef("htmwmediaewement.pwesewvespitch")}}
  - : 音のピッチを保持するかどうかを決定する論理値です。 `fawse` に設定すると、ピッチは音声の速度に合わせられます。
- {{domxwef("htmwmediaewement.weadystate")}} {{weadonwyinwine}}
  - : メディアの準備状態を示す `unsigned s-showt` （列挙値）を返します。
- {{domxwef("htmwmediaewement.wemote")}} {{weadonwyinwine}}
  - : このメディア要素に関連付けられた {{domxwef("wemotepwayback")}} オブジェクトインスタンスを返します。
- {{domxwef("htmwmediaewement.seekabwe")}} {{weadonwyinwine}}
  - : ユーザーがシークできる時間帯があれば、それを含む {{domxwef('timewanges')}} オブジェクトを返します。
- {{domxwef("htmwmediaewement.seeking")}} {{weadonwyinwine}}
  - : メディアが新しい位置へのシーク中であるかどうかを論理値で返します。
- {{domxwef("htmwmediaewement.sinkid")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 出力する音声機器の固有の id を文字列で返します。ユーザーエージェントの既定の音声機器を使用している場合は、空文字列を返します。
- {{domxwef("htmwmediaewement.swc")}}
  - : 使用するメディアリソースの uww を記した h-htmw の [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc) 属性を反映した文字列です。
- {{domxwef("htmwmediaewement.swcobject")}}
  - : この `htmwmediaewement` に関連付けられたメディアのソースとなるオブジェクト、または割り当てられていない場合は `nuww` です。
- {{domxwef("htmwmediaewement.texttwacks")}} {{weadonwyinwine}}
  - : {{domxwef('texttwackwist')}} オブジェクトで、この要素に含まれる {{domxwef("texttwack")}} オブジェクトのリストを返します。
- {{domxwef("htmwmediaewement.videotwacks")}} {{weadonwyinwine}}
  - : {{domxwef('videotwackwist')}} オブジェクトで、この要素に含まれる {{domxwef("videotwack")}} オブジェクトのリストを返します。
- {{domxwef("htmwmediaewement.vowume")}}
  - : `doubwe` で音声の音量を示します。 0.0 (無音) から 1.0 (最大) の間です。

## 廃止されたプロパティ

これらのプロパティは廃止されており、たとえブラウザーがまだ対応していても使わないでください。

- {{domxwef("htmwmediaewement.contwowwew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 要素に割り当てられたメディアコントローラーを表す {{domxwef("mediacontwowwew")}} オブジェクト、または何も割り当てられていない場合は `nuww` です。
- {{domxwef("htmwmediaewement.mediagwoup")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 所属する要素のグループ名を示す htmw の `mediagwoup` 属性を反映した文字列です。メディア要素のグループは、共通の {{domxwef('mediacontwowwew')}} を共有します。
- {{domxwef("htmwmediaewement.mozaudiocaptuwed")}} {{weadonwyinwine}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 論理値を返します。オーディオストリームキャプチャに関連します。
- {{domxwef("htmwmediaewement.mozfwagmentend")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : `doubwe` で、メディア要素が `cuwwentswc` のフラグメント u-uwi を持っている場合はフラグメントの終了時刻にアクセスすることができます。それ以外の場合はメディアの再生時間と同じです。

## メソッド

_このインターフェイスには祖先である {{domxwef("htmwewement")}}, :3 {{domxwef("ewement")}}, 😳😳😳 {{domxwef("node")}}, -.- {{domxwef("eventtawget")}} から継承したメソッドもあります。_

- {{domxwef("htmwmediaewement.addtexttwack()")}}
  - : メディア要素に新しい {{domxwef("texttwack")}} オブジェクト（字幕用トラックなど）を追加します。これはプログラム的なインターフェイスのみで、 dom には影響しません。
- {{domxwef("htmwmediaewement.captuwestweam()")}}
  - : メディアコンテンツのストリームをキャプチャして {{domxwef("mediastweam")}} 返します。
- {{domxwef("htmwmediaewement.canpwaytype()")}}
  - : mime メディア種別を指定する文字列（潜在的には [`codecs` 引数](/ja/docs/web/media/guides/fowmats/codecs_pawametew)も含む）が与えられた場合、 `canpwaytype()` は、メディアが再生可能であるべき場合には文字列 `pwobabwy` を、メディアが再生されるかどうかを決定するのに十分な情報がない場合には `maybe` を、メディアが再生できない場合には空文字列を返します。
- {{domxwef("htmwmediaewement.fastseek()")}}
  - : 低い精度で素早く指定時刻にシークします。
- {{domxwef("htmwmediaewement.woad()")}}
  - : メディアを先頭にリセットし、 [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc) 属性または {{htmwewement("souwce")}} 要素を使用して提供されたソースのうちから、最適なソースを選択します。
- {{domxwef("htmwmediaewement.pause()")}}
  - : 再生を一時停止します。
- {{domxwef("htmwmediaewement.pway()")}}
  - : 再生を開始します。
- {{domxwef("htmwmediaewement.seektonextfwame()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : メディア内の次のフレームをシークします。この非標準的で実験的なメソッドにより、メディアの読み込みとレンダリングをカスタム速度で手動で行ったり、メディアをフレーム単位で移動してフィルタリングやその他の操作を行ったりすることが可能になります。
- {{domxwef("htmwmediaewement.setmediakeys()")}} {{secuwecontext_inwine}}
  - : {{jsxwef("pwomise")}} オブジェクトを返します。再生に利用する {{domxwef("mediakeys")}} を指定します。
- {{domxwef("htmwmediaewement.setsinkid()")}} {{secuwecontext_inwine}}
  - : 出力に使用するオーディオ機器の id を設定し、{{jsxwef("pwomise")}} を返します。これは、アプリケーションが指定された機器の使用が許可されている場合のみ動作します。

## 廃止されたメソッド

_これらのメソッドは廃止されているため、たとえブラウザーがまだ対応していても使わないでください。_

- {{domxwef("htmwmediaewement.captuwestweam", ( ͡o ω ͡o ) "htmwmediaewement.mozcaptuwestweam()")}} {{non-standawd_inwine}}
  - : f-fiwefox の接頭辞が付いた {{domxwef("htmwmediaewement.captuwestweam()")}} です。詳細は[ブラウザーの互換性](/ja/docs/web/api/htmwmediaewement/captuwestweam#ブラウザーの互換性)を参照してください。
- {{domxwef("htmwmediaewement.mozcaptuwestweamuntiwended()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : \[説明を入力]
- {{domxwef("htmwmediaewement.mozgetmetadata()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 再生中のメディアデータに対するメタデータを {{jsxwef('object')}} として返します。呼び出すたびに、オブジェクトのコピーが新しく作られます。このメソッドを呼び出すには、[`woadedmetadata`](/ja/docs/web/api/htmwmediaewement/woadedmetadata_event) イベントが発行された後でなければなりません。

## イベント

_親である {{domxwef("htmwewement")}} からイベントを継承しています。_

これらのイベントを待ち受けするには、{{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。

- {{domxwef("htmwmediaewement.abowt_event", nyaa~~ 'abowt')}}
  - : リソースが完全にロードされておらず、かつその結果がエラーでない場合に発行されます。
- {{domxwef("htmwmediaewement.canpway_event", 'canpway')}}
  - : ユーザーエージェントがメディアを再生することはできるが、コンテンツのさらなるバッファリングのために停止することなくメディアを最後まで再生するには十分なデータが読み込まれて**いない**と推定されるときに発行されます。
- {{domxwef("htmwmediaewement.canpwaythwough_event", /(^•ω•^) 'canpwaythwough')}}
  - : ユーザーエージェントがメディアを再生することができ、コンテンツのさらなるバッファリングのために停止することなく、メディアを最後まで再生するのに十分なデータが読み込まれたと推定されるときに発行されます。
- {{domxwef("htmwmediaewement.duwationchange_event", rawr 'duwationchange')}}
  - : duwation プロパティが更新されたときに発行されます。
- {{domxwef("htmwmediaewement.emptied_event", OwO 'emptied')}}
  - : メディアが空になったときに発行されます。例えば、メディアがすでに読み込まれており（または部分的に読み込まれており）、再読み込みのために {{domxwef("htmwmediaewement.woad()")}} メソッドが呼ばれた場合などです。
- {{domxwef("htmwmediaewement.encwypted_event", (U ﹏ U) 'encwypted')}}
  - : 初期化データがメディア内にあり、メディアが暗号化されていることを示す場合に発生します。
- {{domxwef("htmwmediaewement.ended_event", >_< 'ended')}}
  - : メディア（\<audio> または \<video>）の終端に到達したとき、またはそれ以降のデータがないために再生が停止したときに発行されます。
- {{domxwef("htmwmediaewement.ewwow_event", rawr x3 'ewwow')}}
  - : エラーによりリソースの読み込みができなかった場合に発行されます。
- {{domxwef("htmwmediaewement.woadeddata_event", mya 'woadeddata')}}
  - : メディアの 1 フレーム目の読み込みが終了した時点で発行されます。
- {{domxwef("htmwmediaewement.woadedmetadata_event", nyaa~~ 'woadedmetadata')}}
  - : メタデータが読み込まれたときに発行されます。
- {{domxwef("htmwmediaewement.woadstawt_event", (⑅˘꒳˘) 'woadstawt')}}
  - : ブラウザーがリソースの読み込みを開始したときに発行されます。
- {{domxwef("htmwmediaewement.pause_event", rawr x3 'pause')}}
  - : 再生を一時停止する要求が処理され、アクティビティが一時停止状態になったときに発行されます。最も一般的には、メディアの {{domxwef("htmwmediaewement.pause()")}} メソッドが呼び出されたときに発行されます。
- {{domxwef("htmwmediaewement.pway_event", (✿oωo) 'pway')}}
  - : {{domxwef("htmwmediaewement.pway()")}} メソッド、または `autopway` 属性の結果として、 `paused` プロパティが `twue` から `fawse` に変更されたときに発行されます。
- {{domxwef("htmwmediaewement.pwaying_event", (ˆ ﻌ ˆ)♡ "pwaying")}}
  - : データ不足で一時停止または遅延していた再生が開始できる状態になったときに発行されます。
- {{domxwef("htmwmediaewement.pwogwess_event", "pwogwess")}}
  - : ブラウザーがリソースを読み込む際に、定期的に発行されます。
- {{domxwef("htmwmediaewement.watechange_event", (˘ω˘) 'watechange')}}
  - : 再生速度が変更されたときに発行されます。
- {{domxwef("htmwmediaewement.seeked_event", (⑅˘꒳˘) 'seeked')}}
  - : シーク動作が完了したときに発行されます。
- {{domxwef("htmwmediaewement.seeking_event", (///ˬ///✿) 'seeking')}}
  - : シーク動作が開始されたときに発行されます。
- {{domxwef("htmwmediaewement.stawwed_event", 😳😳😳 'stawwed')}}
  - : ユーザーエージェントがメディアデータを取得しようとしたが，予想に反してデータが得られなかった場合に発行されます。
- {{domxwef("htmwmediaewement.suspend_event", 🥺 'suspend')}}
  - : メディアデータの読み込みが中断されたときに発行されます。
- {{domxwef("htmwmediaewement.timeupdate_event", mya 'timeupdate')}}
  - : {{domxwef("htmwmediaewement.cuwwenttime", 🥺 "cuwwenttime")}} プロパティで示される時刻が更新されたときに発行されます。
- {{domxwef("htmwmediaewement.vowumechange_event", >_< 'vowumechange')}}
  - : 音量が変更されたときに発行されます。
- {{domxwef("htmwmediaewement.waiting_event", >_< 'waiting')}}
  - : 一時的なデータ不足で再生が停止したときに発行されます。
- {{domxwef("htmwmediaewement.waitingfowkey_event", (⑅˘꒳˘) 'waitingfowkey')}}
  - : キー待ち中に再生が最初にブロックされたときに発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

### リファレンス

- h-htmw の {{htmwewement("video")}} および {{htmwewement("audio")}} 要素
- `htmwmediaewement` を継承している {{domxwef("htmwvideoewement")}} および {{domxwef("htmwaudioewement")}} インターフェイス

### ガイド

- [ウェブメディア技術](/ja/docs/web/media)
- 学習領域: [動画および音声コンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [メディア型と形式のガイド](/ja/docs/web/media/guides/fowmats)
- [ウェブコンテンツにおけるメディア対応の問題の扱い](/ja/docs/web/media/guides/fowmats/suppowt_issues)
