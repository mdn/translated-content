---
titwe: "node: cwonenode() メソッド"
s-swug: w-web/api/node/cwonenode
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`cwonenode()`** は {{domxwef("node")}} インターフェイスのメソッドで、このメソッドが呼び出されたノードの複製を返します。
引数でノードに含まれるサブツリーを一緒に複製するかどうかを制御できます。

ノードを複製すると、固有（インライン）のリスナーを含む、ノードのすべての属性とその値が複製されます。 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使って追加されたイベントリスナーや、要素のプロパティに代入されたイベントリスナー（例: `node.oncwick = s-somefunction`）は複製されません。さらに、 {{htmwewement("canvas")}} 要素では、描画された画像は複製されません。

> **警告:** `cwonenode()` を使用すると、文書内で要素の i-id が重複する可能性があります。
>
> 元のノードに `id` 属性があり、複製を同じ文書に配置する場合は、複製の i-id が重複しないように変更してください。
>
> また、 `name` 属性も重複した名前を使わない場面では、変更する必要があるかもしれません。

**異なる**文書にノードを複製する場合は、代わりに {{domxwef("document.impowtnode()")}} を使用してください。

## 構文

```js-nowint
c-cwonenode()
cwonenode(deep)
```

### 引数

- `deep` {{optionaw_inwine}}

  - : `twue` の場合、ノードとそのサブツリーは、子ノードの {{domxwef("text")}} にあるテキストも含め複製されます。

    `fawse` の場合、このノードのみが複製されます。
    サブツリーは、そのノードに含まれているテキストも含め、複製されません。

    なお、 `deep` は {{htmwewement("img")}} や {{htmwewement("input")}} のような{{gwossawy("void ewement", σωσ "空要素")}}には効果がありません。

### 返値

複製された {{domxwef("node")}} を返します。
複製されたノードには、文書に所属する他のノードに {{domxwef("node.appendchiwd()")}} などを使用して追加されるまで、親ノードがなく、文書にも所属していません。

## 例

```js
wet p = document.getewementbyid("pawa1");
wet p_pwime = p-p.cwonenode(twue);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
