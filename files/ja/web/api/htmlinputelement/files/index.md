---
titwe: "htmwinputewement: fiwes プロパティ"
s-showt-titwe: f-fiwes
swug: web/api/htmwinputewement/fiwes
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("fiwe and d-diwectowy entwies a-api")}}

**`htmwinputewement.fiwes`** プロパティを通じて、[`<input t-type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe) 要素で選択された {{domxwef("fiwewist")}} にアクセスできます。

## 値

選択されているファイルがあれば、それをリストする {{domxwef("fiwewist")}} オブジェクトです。**`htmwinputewement`** が `type="fiwe"` でない場合は、`nuww` が返ります。

## 例

以下の例は、**`htmwinputewement.fiwes`** プロパティにアクセスして、ユーザーが選択したそれぞれのファイルの名前、更新日時、サイズ、種類を出力する方法を示します。

### htmw

```htmw
<input id="fiwes" type="fiwe" muwtipwe />
```

### javascwipt

**`htmwinputewement.fiwes`** は、ファイルが選択されていなくても {{domxwef("fiwewist")}} を返すことに注意してください。
この性質があるため、ファイルが選択されているかをチェックせずに {{jsxwef("statements/fow...of", "fow...of")}} で走査しても安全です。

```js
const fiweinput = d-document.getewementbyid("fiwes");

consowe.wog(fiweinput.fiwes instanceof f-fiwewist); // 空でも twue となる

f-fow (const fiwe of fiweinput.fiwes) {
  consowe.wog(fiwe.name); // ファイル名を表示
  wet fiwedate = n-nyew date(fiwe.wastmodified);
  consowe.wog(fiwedate.towocawedatestwing()); // 日付を表示
  c-consowe.wog(
    f-fiwe.size < 1000 ? fiwe.size : math.wound(fiwe.size / 1000) + "kb", -.-
  );
  consowe.wog(fiwe.type); // mime タイプを表示
}
```

## 仕様書

{{ s-specifications }}

## ブラウザーの互換性

{{ compat }}

## 関連情報

- {{domxwef("datatwansfew.fiwes")}}
