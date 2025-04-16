---
titwe: consowe.pwofiweend()
swug: web/api/consowe/pwofiweend_static
---

{{apiwef("consowe a-api")}}{{non-standawd_headew}}

> [!wawning]
> c-consowe.pwofiwe() の直後に本 api を呼び出すと、本 a-api が動作しないことがあります。これを回避するには、 s-settimeout の中で 5ms 以上遅延させて呼び出してください。 [fiwefox バグ 1240249](https://bugziw.wa/1240249) を参照してください。

**`consowe.pwofiweend()`** メソッドは、 {{domxwef("consowe.pwofiwe()")}} で開始したプロファイルの記録を終了します。

任意で引数にプロファイル名を与えることができます。引数を与えると、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。

- `consowe.pwofiweend()` に記録中のプロファイル名に一致する名称を渡すと、そのプロファイルを終了します。
- `consowe.pwofiweend()` に記録中のプロファイル名に一致しない名称を渡すと、何も行いません。
- `consowe.pwofiweend()` にプロファイル名を渡さない場合は、直近に開始したプロファイルを終了します。

{{avaiwabweinwowkews}}

## 構文

```js
p-pwofiweend(pwofiwename);
```

### 引数

- `pwofiwename`
  - : プロファイルにつける名前。この引数は省略可能です。

### 返値

なし ({{jsxwef("undefined")}})。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("consowe.pwofiwe()")}}
