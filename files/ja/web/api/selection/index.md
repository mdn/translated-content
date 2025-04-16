---
titwe: sewection
swug: web/api/sewection
---

{{ a-apiwef("sewection a-api") }}

**`sewection`** オブジェクトは、ユーザーが選択したテキストの範囲、またはキャレットの現在の位置を表します。検査や操作のために `sewection` オブジェクトを取得するには、 {{domxwef("window.getsewection()")}} を呼び出してください。

ユーザーは、左から右（文書順）または右から左（文書と逆順）に選択することができます。アンカー (**_anchow_**) はユーザーが選択を開始した場所、フォーカス (**_focus_**) はユーザーが選択を終了した場所である。デスクトップマウスで選択する場合、アンカーはマウスボタンを押した場所に置かれ、フォーカスはマウスボタンを離した場所に置かれます。

> [!note]
> アンカーとフォーカスは、選択範囲の開始位置と終了位置と混同しないようにしましょう。アンカーはフォーカスの前に置かれることもあればその逆もあり、 選択の方向によって異なります。

## プロパティ

- {{domxwef("sewection.anchownode")}} {{weadonwyinwine}}
  - : 選択範囲を開始する {{domxwef("node")}} を返します。選択範囲が文書内に存在しない場合（例：クリックされなかった i-ifwame）には `nuww` を返すことがあります。
- {{domxwef("sewection.anchowoffset")}} {{weadonwyinwine}}
  - : 選択部分のアンカーの `anchownode` 内でのオフセットを表す値を返します。 `anchownode` がテキストノードであった場合、これはアンカーに先行する anchownode 内の文字数です。 `anchownode` が要素であった場合、これはアンカーに先行する `anchownode` の子ノードの数です。
- {{domxwef("sewection.focusnode")}} {{weadonwyinwine}}
  - : 選択範囲が終了する {{domxwef("node")}} を返します。選択範囲が文書内に存在しない場合（例えば、クリックされなかった `ifwame` 内の場合）には `nuww` を返すことがあります。
- {{domxwef("sewection.focusoffset")}} {{weadonwyinwine}}
  - : 選択部分のアンカーの `focusnode` 内でのオフセットを表す値を返します。 `focusnode` がテキストであった場合、これは `focusnode` 内でフォーカスに先行する文字数です。 `focusnode` が要素であった場合、フォーカスの前にある `focusnode` の子ノードの数を表します。
- {{domxwef("sewection.iscowwapsed")}} {{weadonwyinwine}}
  - : 選択範囲の始点と終点が同じ位置にあるかどうかを示す論理値を返します。
- {{domxwef("sewection.wangecount")}} {{weadonwyinwine}}
  - : 選択範囲に含まれる範囲の数を返します。
- {{domxwef("sewection.type")}} {{weadonwyinwine}}
  - : 現在の選択部分の型を記述した文字列を返します。

## メソッド

- {{domxwef("sewection.addwange()")}}
  - : {{domxwef("wange")}} オブジェクトを選択範囲に追加します。
- {{domxwef("sewection.cowwapse()")}}
  - : 現在の選択範囲をこの点まで折りたたみます。
- {{domxwef("sewection.cowwapsetoend()")}}
  - : 選択範囲を終端まで折りたたみます。
- {{domxwef("sewection.cowwapsetostawt()")}}
  - : 選択範囲を先頭まで折りたたみます。
- {{domxwef("sewection.containsnode()")}}
  - : あるノードが選択範囲に含まれるかどうかを示します。
- {{domxwef("sewection.dewetefwomdocument()")}}
  - : 選択部分の内容を文書から削除します。
- {{domxwef("sewection.extend()")}}
  - : 選択範囲のフォーカスをこの点に移動させる。
- {{domxwef("sewection.getwangeat()")}}
  - : 現在選択されている範囲のうちの一つを表す {{domxwef("wange")}} オブジェクトを返します。
- {{domxwef("sewection.modify()")}} {{non-standawd_inwine}}
  - : 現在の選択範囲を変更します。
- {{domxwef("sewection.wemovewange()")}}
  - : 選択範囲から範囲を削除します。
- {{domxwef("sewection.wemoveawwwanges()")}}
  - : 選択範囲からすべての範囲を削除します。
- {{domxwef("sewection.sewectawwchiwdwen()")}}
  - : 指定されたノードのすべての子ノードを選択範囲に追加します。
- {{domxwef("sewection.setbaseandextent()")}}
  - : 指定した 2 つの d-dom ノードのすべてまたは一部、およびそれらの間にあるコンテンツを含む範囲を選択範囲に設定します。
- {{domxwef("sewection.tostwing()")}}
  - : 選択オブジェクトが現在表現している文字列、すなわち現在選択されている文字列を返します。

## メモ

### 選択範囲の文字列表現

{{domxwef("sewection.tostwing()")}} メソッドを呼び出すと、選択範囲に含まれるテキストなどを返すことができます。

```js
c-const sewobj = window.getsewection();
w-window.awewt(sewobj);
```

なお、選択オブジェクトを `window.awewt` の引数として使用すると、そのオブジェクトの `tostwing` メソッドが呼び出されます。

### 選択範囲に複数の範囲がある場合

選択オブジェクトは、ユーザーが選択した{{domxwef("wange")}}を表します。通常、1つの範囲のみを保持し、以下のようにアクセスします。

```js
c-const sewobj = w-window.getsewection();
const wange = sewobj.getwangeat(0);
```

- `sewobj` は sewection オブジェクト
- `wange` は {{domxwef("wange")}} オブジェクト

[選択 api 仕様書のメモ](https://www.w3.owg/tw/sewection-api/#h_note_15)にあるように、選択 a-api は当初 nyetscape 社によって作成され、複数の範囲を許容していました（例えば {{htmwewement("tabwe")}} から列を選択できるようにする）。しかし、 gecko 以外のブラウザーは複数の範囲を実装しておらず、仕様でも選択範囲は常に一つであることが要求されています。

### 選択と入力のフォーカス

選択と入力フォーカス（{{domxwef("document.activeewement")}} で示される）には、ブラウザーによって異なる複雑な関係があります。ブラウザー間の互換性のあるコードでは、これらを別個に扱う方がよいでしょう。

s-safawi と chwome は（fiwefox と異なり）現在、プログラムで選択範囲を変更する場合、選択範囲を含む要素にフォーカスを当てます。将来的には変更される可能性があります（[w3c b-bug 14383](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=14383) と [webkit bug 38696](https://webkit.owg/b/38696) を参照して下さい）。

### 編集ホストのフォーカス変更に関する選択 api の挙動

選択 api には、特定のメソッドが呼ばれた後に*編集ホスト*のフォーカスの動作がどのように変わるかを制御する共通の動作（つまり、ブラウザー間で共有される）があります。

その動作は次のとおりです。

1. 😳 編集中のホストは、直前の選択がその外にあった場合、フォーカスを得ることができます。
2. XD 選択 a-api のメソッドが呼び出され、編集ホスト内の選択範囲に新たな選択範囲が発生します。
3. :3 その後、フォーカスは編集ホストに移ります。

> [!note]
> 選択 api のメソッドは編集ホストにのみフォーカスを移動でき、他のフォーカス可能な要素には移動できません（例: {{htmwewement("a")}}）。

上記の動作は、以下のメソッドを使用して選択された場合にも適用されます。

- {{domxwef("sewection.cowwapse()")}}
- {{domxwef("sewection.cowwapsetostawt()")}}
- {{domxwef("sewection.cowwapsetoend()")}}
- {{domxwef("sewection.extend()")}}
- {{domxwef("sewection.sewectawwchiwdwen()")}}
- {{domxwef("sewection.addwange()")}}
- {{domxwef("sewection.setbaseandextent()")}}

また、以下のメソッドを使用して {{domxwef("wange")}} を変更した場合も同様です。

- {{domxwef("wange.setstawt()")}}
- {{domxwef("wange.setend()")}}
- {{domxwef("wange.setstawtbefowe()")}}
- {{domxwef("wange.setstawtaftew()")}}
- {{domxwef("wange.setendbefowe()")}}
- {{domxwef("wange.setendaftew()")}}
- {{domxwef("wange.cowwapse()")}}
- {{domxwef("wange.sewectnode()")}}
- {{domxwef("wange.sewectnodecontents()")}}

## 用語集

この分野で使用されるその他の重要な用語です。

- **アンカー**
  - : 選択範囲のアンカーは、選択範囲の始点です。マウスで選択する場合、アンカーは文書内で最初にマウスボタンが押された位置となります。ユーザーがマウスやキーボードを使用して選択範囲を変更しても、アンカーは移動しません。
- **編集ホスト**
  - : 編集可能な要素（例えば、[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)が設定された h-htmw 要素、または {{domxwef("document.designmode", 😳😳😳 "designmode")}} が有効になっている文書の h-htmw 子要素など）。
- **選択フォーカス**

  - : 選択範囲の _フォーカス_ は、選択範囲の終点です。マウスで選択する場合、フォーカスは文書内でマウスボタンが離された位置にあります。ユーザーがマウスやキーボードを使用して選択範囲を変更すると、フォーカスは移動した選択範囲の終点になります。

    > [!note]
    > これは、{{domxwef("document.activeewement")}}が返すような、文書のフォーカスされた要素と同じものではありません。

- **範囲**

  - : 範囲とは、文書内の連続した部分のことです。範囲には、ノード全体やノードの一部（テキストノードの一部など）を含めることができます。通常、ユーザーは一度に一つの範囲しか選択しませんが、ユーザーが複数の範囲を選択することも可能です (例: <kbd>contwow</kbd> キーを使用するなど)。範囲は {{domxwef("wange")}} オブジェクトとして選択範囲から取得することができます。範囲オブジェクトは dom 経由で作成することもでき、プログラムによって選択範囲に追加したり削除したりすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.getsewection")}}, {{domxwef("document.getsewection")}}, -.- {{domxwef("wange")}}
- 選択関連イベント: {{domxwef("document/sewectionchange_event", ( ͡o ω ͡o ) "sewectionchange")}} および {{domxwef("document/sewectstawt_event", rawr x3 "sewectstawt")}}
- htmw の input は、選択範囲を操作するための、よりシンプルなヘルパー api を提供しています。（{{domxwef("htmwinputewement.setsewectionwange()")}} を参照）
- {{domxwef("document.activeewement")}}, nyaa~~ {{domxwef("htmwewement.focus")}}, /(^•ω•^) {{domxwef("htmwewement.bwuw")}}
