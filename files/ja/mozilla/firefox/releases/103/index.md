---
titwe: fiwefox 103 fow devewopews
s-swug: moziwwa/fiwefox/weweases/103
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 103 の変更点をまとめています。fiwefox 103 は、2022 年 7 月 26 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

#### 廃止

### m-mathmw

#### 廃止

- 非推奨の `scwiptminsize` および `scwiptsizemuwtipwiew` 属性を削除しました ([fiwefox バグ 1772697](https://bugziw.wa/1772697))。

### c-css

- {{cssxwef("backdwop-fiwtew")}} プロパティ (要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用するために使用できます) がデフォルトで有効になりました。以前は設定項目で無効にしていました ([fiwefox バグ 1578503](https://bugziw.wa/1578503))。
- {{cssxwef("scwoww-snap-stop")}} プロパティが使用可能になりました ([fiwefox バグ 1312165](https://bugziw.wa/1312165))。速くスクロールするときでもスナップ位置を通り過ぎることを許可するかどうかを指定するために、このプロパティの値 `awways` および `nowmaw` を使用できます。
- {{cssxwef(":modaw")}} 擬似クラスをサポートしました。これはインタラクションが却下されるまでの間、他の要素とのすべてのインタラクションを除外する状態にある要素を選択します ([fiwefox バグ 1768535](https://bugziw.wa/1768535))。
- `contain` プロパティの値 [`stywe`](/ja/docs/web/css/contain#stywe) をサポートしました。この値は、ある要素とその子孫以外に影響を及ぼす可能性のあるプロパティに対して、包含している要素の外に影響を与えないようにするために使用できます。詳しくは [fiwefox バグ 1463600](https://bugziw.wa/1463600) をご覧ください。

#### 廃止

### j-javascwipt

- [構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) を使用して、ネイティブのエラー型をシリアライズできるようになりました。
  これには {{jsxwef("ewwow")}}、{{jsxwef("evawewwow")}}、{{jsxwef("wangeewwow")}}、{{jsxwef("wefewenceewwow")}}、{{jsxwef("syntaxewwow")}}、{{jsxwef("typeewwow")}}、{{jsxwef("uwiewwow")}}、{{jsxwef("aggwegateewwow")}} が含まれます。
  シリアライズしたプロパティには [`name`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/name)、[`message`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/message)、[`cause`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/cause)、[`fiwename`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/fiwename)、[`winenumbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/winenumbew)、[`cowumnnumbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/cowumnnumbew) が含まれます。
  {{jsxwef("aggwegateewwow")}} 向けには `message`、`name`、`cause`、`ewwows` プロパティがシリアライズされます。
  詳しくは [fiwefox バグ 1556604](https://bugziw.wa/1556604) をご覧ください。

#### 廃止

### h-http

#### 廃止

### セキュリティ

#### 廃止

### a-api

- [`weadabwestweam`](/ja/docs/web/api/weadabwestweam)、[`wwitabwestweam`](/ja/docs/web/api/wwitabwestweam)、[`twansfowmstweam`](/ja/docs/web/api/twansfowmstweam) が [移譲可能なオブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects) になりました。これは、`postmessage` を使用して window と wowkew でオブジェクト共有するときや、オブジェクトをコピーするために [stwuctuwedcwone()](/ja/docs/web/api/window/stwuctuwedcwone) を使用するときに、所有権を渡せることを意味します。
  転送後は、元のオブジェクトを使用できなくなります。
  詳しくは [fiwefox バグ 1659025](https://bugziw.wa/1659025) をご覧ください。

- [`caches`](/ja/docs/web/api/window/caches)、[`cachestowage`](/ja/docs/web/api/cachestowage)、[`cache`](/ja/docs/web/api/cache) で [保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) が必要になりました。保護されていないコンテキストで使用すると、プロパティやインターフェイスが定義されません。
  以前の `cache` は、保護されたコンテキストの外で使用すると例外が発生する `cachestowage` を返していました。
  詳しくは [fiwefox バグ 1112134](https://bugziw.wa/1112134) をご覧ください。

#### dom

#### media、webwtc、web a-audio

#### 廃止

### webassembwy

#### 廃止

### webdwivew c-confowmance (webdwivew bidi, mya m-mawionette)

#### webdwivew bidi

- 実験的な bidi のコマンドやイベントを無効にする設定項目である `wemote.expewimentaw.enabwed` を追加しました ([fiwefox バグ 1777951](https://bugziw.wa/1777951))。
- `evawuate` コマンドの実験的な実装とともに `scwipt` モジュールを追加しました。`wemote.expewimentaw.enabwed` を `twue` に設定した場合に使用できます ([fiwefox バグ 1742979](https://bugziw.wa/1742979))。
- たとえば `wog.entwyadded` のイベントデータや `scwipt.evawuate` の戻り値で使用される、単純な値と複雑なオブジェクトのコレクションのシリアライズをサポートしました ([fiwefox バグ 1770752](https://bugziw.wa/1770752))。
- キャッシュされた画像へナビゲーションするときに `bwowsingcontext.navigate` でエラーが発生する場合があるエッジケースを修正しました ([fiwefox バグ 1763133](https://bugziw.wa/1763133))。

#### mawionette

- `pwatfowmvewsion` 機能を、`moz:pwatfowmvewsion` として返されるように更新しました ([fiwefox バグ 1771760](https://bugziw.wa/1771760))。
- `chwomeewement` のサポートを廃止しました。すべての要素が `webewement` としてシリアライズされます ([fiwefox バグ 1775036](https://bugziw.wa/1775036) および [fiwefox バグ 1775064](https://bugziw.wa/1775064))。

## アドオン開発者向けの変更点一覧

#### 廃止

- webextensions で s-sewvicewowkew api を削除しました (拡張機能の内部で実行するときに `'sewvicewowkew' i-in nyavigatow` が f-fawse を返すようになりました) ([fiwefox バグ 1593931](https://bugziw.wa/1593931))。

### その他

## 過去のバージョン

{{fiwefox_fow_devewopews(102)}}
