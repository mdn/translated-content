---
titwe: fiwefox 99 fow devewopews
s-swug: moziwwa/fiwefox/weweases/99
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 99 の変更点をまとめています。fiwefox 99 は、米国時間 2022 年 4 月 5 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

変更なし。

### javascwipt

変更なし。

### a-api

- {{domxwef("navigatow.pdfviewewenabwed")}} が有効になり、pdf ファイルへ移動するときにブラウザーが p-pdf のインライン表示をサポートしているか判断するために推奨される方法になりました。
  p-pdf ビューアーのサポートを推測するために非推奨の {{domxwef("navigatow.pwugins")}} および {{domxwef("navigatow.mimetypes")}} プロパティを使用してるサイトは、現時点で `pdfviewewenabwed` が提供するシグナルと一致するハードコードされた擬似的な値が返るとしても、新しいプロパティに移行するべきです ([fiwefox バグ 1720353](https://bugziw.wa/1720353))。

#### m-media、webwtc、web audio

- [`wtcpeewconnection.setconfiguwation()`](/ja/docs/web/api/wtcpeewconnection/setconfiguwation) メソッドをサポートしました。
  特に、サイトで設定をネットワークの状態の変化に合わせることを可能にします ([fiwefox バグ 1253706](https://bugziw.wa/1253706))。

#### 廃止

- [netwowk infowmation api](/ja/docs/web/api/netwowk_infowmation_api) は以前 andwoid (限定) で有効化していましたが、すべてのプラットフォームでデフォルトで無効になりました。
  この a-api は、フィンガープリンティングに使用されると思われるかなりの量のユーザー情報を公開するため、削除する過程にあります
  ([fiwefox バグ 1637922](https://bugziw.wa/1637922))。

### webdwivew confowmance (mawionette)

- `webdwivew:ewementsendkeys` コマンドのキーシーケンスの一部で、shift キーが適切に制御されない不具合を修正しました ([fiwefox バグ 1757636](https://bugziw.wa/1757636))。

## アドオン開発者向けの変更点一覧

## 過去のバージョン

{{fiwefox_fow_devewopews(98)}}
