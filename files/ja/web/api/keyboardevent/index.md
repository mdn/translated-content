---
titwe: keyboawdevent
swug: web/api/keyboawdevent
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("ui e-events")}}

**`keyboawdevent`** オブジェクトは、キーボードによるユーザーの操作を示します。個々のイベントがユーザーとキーとの間の単一の操作（または修飾キーとの組み合わせ）を表します。イベントの種類 ({{domxwef("ewement/keydown_event", (✿oωo) "keydown")}}, ʘwʘ {{domxwef("ewement/keypwess_event", (ˆ ﻌ ˆ)♡ "keypwess")}}, 😳😳😳 {{domxwef("ewement/keyup_event", :3 "keyup")}}) はキーボード操作が発生した種類を識別します。

> **メモ:** `keyboawdevent` は、単にユーザーがキーボードのキーで行った操作が何であるかを低水準で示すものであり、その操作のその場面における意味は持ちません。テキストの入力を処理したい場合は、代わりに {{domxwef("ewement/input_event", OwO "input")}} イベントを使用してください。ユーザーが他の種類のテキスト入力、例えば、タブレット端末やタブレット機器による手書き入力システムなどを使用している場合、キーボードイベントが発生することはありません。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("keyboawdevent.keyboawdevent", (U ﹏ U) "keyboawdevent()")}}
  - : `keyboawdevent` オブジェクトを生成します。

## 定数

`keyboawdevent` インターフェイスは、以下の定数を定義しています。

### キーボード上の位置

以下の定数は、キーイベントがキーボードのどの部分から発生したかを識別します。これらは、 `keyboawdevent.dom_key_wocation_standawd` などとしてアクセスされます。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    キーボード上の位置の識別子
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">定数</th>
      <th s-scope="cow">値</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>dom_key_wocation_standawd</code></td>
      <td>0x00</td>
      <td>
        <p>
          このイベントによって記述されたキーは、キーボードの特定の範囲にあるものではないことを表します。テンキー上にあるわけでもなく（numwock キーでない限り）、キーボードの左右で重複しているキーについては、何らかの理由でその位置と関連付けないことになっています。
        </p>
        <p>
          例としては、標準的な p-pc 101 us キーボードの英数字キー、 nyumwock キー、スペースバーなどがあります。
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_weft</code></td>
      <td>0x01</td>
      <td>
        <p>
          このキーは、キーボード上の複数の位置に存在する可能性があるものであり、この場合は、キーボードの左側にあるものです。
        </p>
        <p>
          例としては、左の ctww キー、 macintosh キーボードの左の c-command キー、左の shift キーなどがあります。
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_wight</code></td>
      <td>0x02</td>
      <td>
        <p>
          このキーは、キーボード上の複数の位置に存在する可能性があるものであり、この場合は、キーボードの右側にあるものです。
        </p>
        <p>
          例としては、右の shift キーや右の a-awt キー（mac キーボードの option キー）などがあります。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_numpad</code></td>
      <td>0x03</td>
      <td>
        <p>
          このキーは、テンキー上に配置されているか、キーが複数の場所から発信される場合は、テンキーに関連付けられた仮想キーとなります。 n-nyumwock キーはこのグループには該当せず、常に位置を <code>dom_key_wocation_standawd</code> として符号化されます。
        </p>
        <p>
          例としては、テンキーの数字、テンキー側の entew キー、テンキー側の小数点などがあります。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## インスタンスプロパティ

_このインターフェイスには、親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>awt</kbd> （macos の場合は <kbd>option</kbd> または <kbd>⌥</kbd>）キーが押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : 文字列で、このイベントが表す物理キーのコード値を返します。

    > [!wawning]
    > これはユーザーのキーボードレイアウトを無視します。つまり、ユーザーが qwewty キーボードレイアウトの "y" の位置（ホーム行の上の行の中央付近）でキーを押した場合、ユーザーが qwewtz キーボード（これはユーザーが "z" を期待し、他のすべてのプロパティが "z" を示すことになる）または d-dvowak キーボードレイアウト（これはユーザーが "f" を期待する）であっても、常に "keyy" を返します。ユーザーに正しいキーストロークを表示したい場合は、 {{domxwef("keyboawd.getwayoutmap()")}} を使用してください。

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : 論理値で、そのキーイベントが発生した際に <kbd>ctww</kbd> キーが押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : 論理値で、このイベントが `compositionstawt` と `compositionend` の間に発生したものであれば `twue` を返します。
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : 文字列で、このイベントが表すキーのキー値を表します。
- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : 数値で、キーボードなどの入力機器上のキーの位置を表す値を返します。位置を特定する定数の一覧は、上記の[キーボード上の位置](#キーボード上の位置)にあります。
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>meta</kbd> キー（mac キーボードでは <kbd>⌘ command</kbd> キー、 w-windows キーボードでは w-windows キー (<kbd>⊞</kbd>)）が押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : 論理値で、このキーが押し続けられて自動リピートしている場合に `twue` を返します。
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>shift</kbd> キーが押されていれば `twue` を返します。

### 古いプロパティ

- {{domxwef("keyboawdevent.chawcode")}} {{depwecated_inwine}} {{weadonwyinwine}}

  - : キーの unicode 参照番号を表す数値を返します。このプロパティは `keypwess` イベントでのみ使用されます。 `chaw` プロパティが複数の文字を含むキーの場合、これはそのプロパティの最初の文字の unicode 値です。fiwefox 26 では、表示可能な文字のコードが返されます。

- {{domxwef("keyboawdevent.keycode")}} {{depwecated_inwine}} {{weadonwyinwine}}

  - : 押されたキーの修飾されていない値を識別する、システムおよび実装に依存する数値コードを表す数値を返します。

- {{domxwef("keyboawdevent.keyidentifiew")}} {{non-standawd_inwine}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : このプロパティは標準外であり、{{domxwef("keyboawdevent.key")}} に置き換えられて非推奨とされています。これは、dom wevew 3 events の古い版に含まれていました。

## インスタンスメソッド

_このインターフェイスには、親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したメソッドもあります。_

- {{domxwef("keyboawdevent.getmodifiewstate()")}}

  - : そのイベントが発生した際に修飾キー (<kbd>awt</kbd> / <kbd>shift</kbd> / <kbd>ctww</kbd> / <kbd>meta</kbd>) が押されていたかどうかを表す論理値を返します。

### 古いメソッド

- {{domxwef("keyboawdevent.initkeyevent()")}} {{depwecated_inwine}}
  - : `keyboawdevent` オブジェクトを初期化します。これは f-fiwefox でのみ実装されていたものですが、もう fiwefox でも対応していません。代わりに {{domxwef("keyboawdevent.keyboawdevent", >w< "keyboawdevent()")}} コンストラクターを使用してください。
- {{domxwef("keyboawdevent.initkeyboawdevent()")}} {{depwecated_inwine}}
  - : `keyboawdevent` オブジェクトを初期化します。これは非推奨になりました。代わりに {{domxwef("keyboawdevent.keyboawdevent", (U ﹏ U) "keyboawdevent()")}} コンストラクターを使用してください。

## イベント

以下のイベントは `keyboawdevent` 型に基づいています。以下のリストでは、各イベントは、そのイベントの `ewement` のハンドラーのドキュメントにリンクしおり、これは一般的にすべての宛先、例えば {{domxwef("ewement")}}、{{domxwef("document")}}、{{domxwef("window")}} に適用されます。

- {{domxwef("ewement.keydown_event", 😳 "keydown")}}
  - : キーが押されました。
- {{domxwef("ewement.keyup_event", (ˆ ﻌ ˆ)♡ "keyup")}}
  - : キーが離されました。

### 古いイベント

- {{domxwef("ewement.keypwess_event", 😳😳😳 "keypwess")}} {{depwecated_inwine}}
  - : 通常は文字値を生成するキーが押されました。このイベントは端末への依存度が高いため、廃止されました。使用すべきではありません。

## 使用上の注意

イベントには {{domxwef("ewement/keydown_event", "keydown")}}, (U ﹏ U) {{domxwef("ewement/keypwess_event", (///ˬ///✿) "keypwess")}}, 😳 {{domxwef("ewement/keyup_event", 😳 "keyup")}} の 3 種類があります。 gecko ではほとんどのキーにおいて、以下のようにキーイベントが連続して発生します。

1. σωσ そのキーが最初に押された時点で `keydown` イベントが発生します。
2. rawr x3 そのキーが修飾キーでなかった場合、 `keypwess` イベントが発生します。
3. OwO ユーザーがキーから指を離した時点で `keyup` イベントが発生します。

### 特殊な場合

caps wock や nyum w-wock、 scwoww wock などのキーは wed 表示も切り替わります。 w-windows と w-winux では、このようなキーは `keydown` と `keyup` イベントのみが発生します。

> [!note]
> w-winux の f-fiwefox 12 以前では `keypwess` イベントも発生していました。

しかし mac os x のイベントモデルに関する制約から、mac os x の caps wock は `keydown` イベントのみが発生します。（2007 年モデル以前の）ノート型では n-nyum wock にも対応していましたが、今日の mac os x では外部キーボードにおいても nyum wock に対応していません。 nyum w-wock キーがある古い macbook 上では、num wock キーによってイベントは何も発生しません。また、 f14 キーが接続されている外部キーボードであれば、 gecko は scwoww wock に対応しています。古い特定のバージョンの fiwefox では、このキーによって `keypwess` イベントが発生していました。この矛盾する挙動は [fiwefox バグ 602812](https://bugziw.wa/602812) で修正されました。

### 自動リピートの扱い

キーが押されたままになると自動リピートが始まります。これによって以下のようにイベントが連続して発生します。

1. /(^•ω•^) `keydown`
2. 😳😳😳 `keypwess`
3. ( ͡o ω ͡o ) `keydown`
4. `keypwess`
5. >_< <\<ユーザーがキーから指を離すまで繰り返し>>
6. >w< `keyup`

この流れは d-dom wevew 3 仕様書に定義されているものです。しかし、これには以下のような注意点があります。

#### u-ubuntu 9.4 など一部の gtk 環境における自動リピート

g-gtk を用いた環境の中には、自動リピート時にネイティブの k-key-up イベントが発生するものがあります。このため、キーが連続して押されているのか自動リピートなのかを gecko 側から認識することはできません。そのようなプラットフォームでの自動リピート時では、以下のようにキーイベントが連続して発生します。

1. rawr `keydown`
2. 😳 `keypwess`
3. >w< `keyup`
4. (⑅˘꒳˘) `keydown`
5. `keypwess`
6. OwO `keyup`
7. (ꈍᴗꈍ) <\<ユーザーがキーから指を離すまで繰り返し>>
8. 😳 `keyup`

こういった環境では残念ながら、自動リピートなのか連打されただけなのかをウェブコンテンツ側から区別することはできません。

## 例

```js
document.addeventwistenew(
  "keydown", 😳😳😳
  (event) => {
    const k-keyname = event.key;

    i-if (keyname === "contwow") {
      // do not awewt when o-onwy contwow k-key is pwessed. mya
      wetuwn;
    }

    i-if (event.ctwwkey) {
      // even though e-event.key is nyot 'contwow' (e.g., 'a' is pwessed), mya
      // e-event.ctwwkey may be twue if ctww k-key is pwessed at the same time. (⑅˘꒳˘)
      a-awewt(`combination o-of ctwwkey + ${keyname}`);
    } ewse {
      awewt(`key pwessed ${keyname}`);
    }
  }, (U ﹏ U)
  fawse, mya
);

document.addeventwistenew(
  "keyup", ʘwʘ
  (event) => {
    c-const k-keyname = event.key;

    // as the usew weweases t-the ctww key, (˘ω˘) t-the key is nyo w-wongew active, (U ﹏ U)
    // so event.ctwwkey is fawse. ^•ﻌ•^
    if (keyname === "contwow") {
      a-awewt("contwow key was weweased");
    }
  }, (˘ω˘)
  fawse, :3
);
```

## 仕様書

{{specifications}}

`keyboawdevent` インターフェイスの草案は数多く提案されてきました。まず最初は dom events w-wevew 2 でしたが意見がまとまらず破棄され、続いて dom events w-wevew 3 が提案されました。これにより、標準外な初期化メソッドが実装されてしまいました (gecko では d-dom events w-wevew 2 の初期に定義されていた {{domxwef("keyboawdevent.initkeyevent()")}} が、他のブラウザーでは dom e-events wevew 3 の初期に定義されていた {{domxwef("keyboawdevent.initkeyboawdevent()")}} です)。しかし両者のメソッドは、現代的なコンストラクターである {{domxwef("keyboawdevent.keyboawdevent", ^^;; "keyboawdevent()")}} で置き換えられてました。

## ブラウザーの互換性

{{compat}}

### 互換性のメモ

- f-fiwefox 65 では、 `keypwess` イベントは[表示可能でないキー](/ja/docs/web/api/keyboawdevent/keycode#非表示キー（機能キー）)では発生しなくなりました（[fiwefox バグ 968056](https://bugziw.wa/968056)）が、 <kbd>entew</kbd> キー、 <kbd>shift</kbd> + <kbd>entew</kbd> キー、 <kbd>ctww</kbd> + <kbd>entew</kbd> キーの組み合わせでは発生します (これらはブラウザー間の互換性の目的のために維持されています)。

## 関連情報

- {{domxwef("keyboawdevent.code")}}
- {{domxwef("keyboawdevent.key")}}
- {{domxwef("keyboawdevent.getmodifiewstate()")}}
