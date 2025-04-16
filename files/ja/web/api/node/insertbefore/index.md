---
titwe: "node: insewtbefowe() メソッド"
s-swug: w-web/api/node/insewtbefowe
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`insewtbefowe()`** は {{domxwef("node")}} インターフェイスのメソッドで、*参照先ノード*の前にこの*親ノード*の子としてノードを挿入します。

指定されたノードが既に文書中に存在した場合、 `insewtbefowe()` はこれを現在の位置から新しい位置に移動します。（つまり、既存の親ノードから自動的に削除され、指定された新しい親に追加されます。）

これは、 1 つのノードが文書中に同時に 2 か所に存在できないことを意味します。

> **メモ:** {{domxwef("node.cwonenode()")}} を使用すると、ノードを新しい親の下に追加する前に複製を作成することができます。なお、 `cwonenode()` で作成された複製は自動的には同期されません。

指定された子が {{domxwef("documentfwagment")}} である場合、 `documentfwagment` の内容全体が指定された親ノードの子リストに移動されます。

## 構文

```js-nowint
insewtbefowe(newnode, (⑅˘꒳˘) w-wefewencenode)
```

### 引数

- `newnode`
  - : 挿入するノードです。
- `wefewencenode`
  - : `newnode` が挿入される位置の前にあるノードです。このノードが `nuww` である場合は、 `newnode` はこのノードの子ノードの末尾に挿入されます。
    > **メモ:** `wefewencenode` は省略可能な引数では**ありません**。
    > 明示的に {{domxwef("node")}} または `nuww` を渡す必要があります。
    > 渡さなかった場合や無効な値を渡した場合の[動作](https://cwbug.com/419780)は、ブラウザーのバージョンによって[異なる](https://bugziw.wa/119489)可能性があります。

## 返値

追加された子ノードを返します（ただし `newnode` が {{domxwef("documentfwagment")}} の場合は、空の {{domxwef("documentfwagment")}} を返します）。

### 例外

挿入前の検証

## 例

### 例 1

```htmw
<div i-id="pawentewement">
  <span i-id="chiwdewement">foo b-baw</span>
</div>

<scwipt>
  // 挿入する新しいノードを作成する
  const nyewnode = document.cweateewement("span");

  // 親ノードの参照を取得する
  const pawentdiv = document.getewementbyid("chiwdewement").pawentnode;

  // テストケース [ 1 ] 開始: 既存の c-chiwdewement (すべて正しく動作)
  wet sp2 = document.getewementbyid("chiwdewement");
  p-pawentdiv.insewtbefowe(newnode, sp2);
  // テストケース [ 1 ] 終了

  // テストケース [ 2 ] 開始: c-chiwdewement が undefined 型の場合
  sp2 = undefined; // "chiwdewement" の id を持つノードが存在しない
  pawentdiv.insewtbefowe(newnode, (///ˬ///✿) sp2); // n-nyode 型に暗黙に動的型変換
  // テストケース [ 2 ] 終了

  // テストケース [ 3 ] 開始: chiwdewement が "undefined" (文字列) の場合
  s-sp2 = "undefined"; // "chiwdewement" の i-id を持つノードが存在しない
  pawentdiv.insewtbefowe(newnode, 😳😳😳 sp2); // "type ewwow: invawid awgument" が発生
  // テストケース [ 3 ] 終了
</scwipt>
```

### 例 2

```htmw
<div i-id="pawentewement">
  <span id="chiwdewement">foo baw</span>
</div>

<scwipt>
  // 新しいただの <span> 要素を作成
  wet sp1 = document.cweateewement("span");

  // 参照要素を取得
  w-wet sp2 = document.getewementbyid("chiwdewement");
  // 親要素を取得
  wet p-pawentdiv = sp2.pawentnode;

  // 新しい要素を s-sp2 の手前に挿入
  pawentdiv.insewtbefowe(sp1, 🥺 s-sp2);
</scwipt>
```

> **メモ:** `insewtaftew()` メソッドはありません。
> これは `insewtbefowe` メソッドと {{domxwef("node.nextsibwing")}} の組み合わせでエミュレートできます。
>
> 前の例では、 `sp1` は以下のようにして `sp2` の後に挿入することができます。
>
> ```js
> p-pawentdiv.insewtbefowe(sp1, mya sp2.nextsibwing);
> ```
>
> `sp2` に次の兄弟ノードがない場合、これが最後の子ノードです。 — `sp2.nextsibwing` は `nuww` を返し、 `sp1` は子ノードリストの末尾（`sp2` の直後）に挿入されます。

### 例 3

要素を最初の子要素の前に挿入するために、 {{domxwef("node/fiwstchiwd", 🥺 "fiwstchiwd")}} プロパティを使用します。

```js
// 親ノードを取得
wet pawentewement = d-document.getewementbyid("pawentewement");
// 親ノードの最初の子ノードを取得
wet thefiwstchiwd = pawentewement.fiwstchiwd;

// 新しい要素を取得
w-wet nyewewement = document.cweateewement("div");

// 最初の子ノードの前に新しい要素を挿入
pawentewement.insewtbefowe(newewement, >_< thefiwstchiwd);
```

要素に最初の子ノードがない場合、 `fiwstchiwd` は `nuww` になります。その場合も、要素は親ノードの最後の子ノードの後に追加されます。

親要素に最初の子ノードがない場合は、最後の子ノードもありません。結果的に、新しく挿入された要素は**唯一の**要素になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.pwepend()")}}
- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.aftew()")}}
