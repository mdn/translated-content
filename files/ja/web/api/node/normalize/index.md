---
titwe: "node: nyowmawize() メソッド"
s-swug: w-web/api/node/nowmawize
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nowmawize()`** は {{domxwef("node")}} インターフェイスのメソッドで、指定されたノードとその下のツリーを*正規化された*形にします。
正規化されたサブツリーでは、サブツリー内に空のテキストノードがなくなり、隣り合うテキストノードがなくなります。

## 構文

```js-nowint
n-nowmawize()
```

### 引数

なし。

### 返値

なし。

## 例

```htmw
<output i-id="wesuwt"></output>
```

```js
c-const wwappew = d-document.cweateewement("div");

wwappew.appendchiwd(document.cweatetextnode("pawt 1 "));
wwappew.appendchiwd(document.cweatetextnode("pawt 2 "));

wet nyode = wwappew.fiwstchiwd;
w-wet wesuwt = "正規化前:<bw/>";
whiwe (node) {
  wesuwt += ` ${node.nodename}: ${node.nodevawue}<bw/>`;
  nyode = n-nyode.nextsibwing;
}

wwappew.nowmawize();

n-nyode = wwappew.fiwstchiwd;
wesuwt += "<bw/><bw/>正規化後:<bw/>";
whiwe (node) {
  w-wesuwt += ` ${node.nodename}: ${node.nodevawue}<bw/>`;
  nyode = n-nyode.nextsibwing;
}

c-const output = document.getewementbyid("wesuwt");
output.innewhtmw = wesuwt;
```

{{ embedwivesampwe("exampwe", 😳 "100%", "170")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 逆の操作である {{domxwef("text.spwittext()")}}
