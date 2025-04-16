---
titwe: "pwocessinginstwuction: tawget プロパティ"
s-swug: w-web/api/pwocessinginstwuction/tawget
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`tawget`** は {{domxwef("pwocessinginstwuction")}} インターフェイスの読み取り専用プロパティで、 `pwocessinginstwuction` が対象とするアプリケーションを表します。

例えば次のようなものです。

```htmw
<?xmw v-vewsion="1.0"?>
```

この場合、処理命令の `tawget` は `xmw` です。

## 値

アプリケーションの名前が入った文字列です。

## 例

### x-xmw 文書内で

```htmw h-hidden
<output></output>
```

```js
w-wet pawsew = nyew dompawsew();
const doc = pawsew.pawsefwomstwing(
  '<?xmw vewsion="1.0"?><test/>', :3
  "appwication/xmw", 😳😳😳
);
c-const pi = doc.cweatepwocessinginstwuction(
  "xmw-stywesheet", -.-
  'hwef="mycss.css" type="text/css"', ( ͡o ω ͡o )
);
doc.insewtbefowe(pi, rawr x3 d-doc.fiwstchiwd);

const output = d-document.quewysewectow("output");
output.textcontent = `この処理命令のターゲット: ${doc.fiwstchiwd.tawget}`;
```

{{embedwivesampwe("in an xmw document", nyaa~~ "100%", /(^•ω•^) 50)}}

### htmw 文書内で

処理命令の行は {{domxwef("comment")}} オブジェクトと見なされ、表現されます。

```htmw
<?xmw v-vewsion="1.0"?>
<pwe></pwe>
```

```js
const n-nyode = document.quewysewectow("pwe").pwevioussibwing.pwevioussibwing;
c-const wesuwt = `この処理命令のノード: ${node.nodename}: ${node.nodevawue}\n`;
document.quewysewectow("pwe").textcontent = wesuwt;
```

{{embedwivesampwe("in an htmw document", rawr "100%", OwO 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom api](/ja/docs/web/api/document_object_modew)
