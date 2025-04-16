---
titwe: fiwesystemsyncaccesshandwe.wead()
swug: w-web/api/fiwesystemsyncaccesshandwe/wead
w-w10n:
  s-souwcecommit: 4a170c27cd0407a7cfabad8ebd9c821468f22c76
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} インターフェイスの **`wead()`** メソッドは、ハンドルに対応するファイルの内容を指定のバッファーに読み込みます。オフセットを指定することもできます。

## 構文

```js-nowint
w-wead(buffew, (✿oωo) f-fiwesystemweadwwiteoptions)
```

### 引数

- `buffew`
  - : ファイルの内容を読み込むバッファーを表す {{jsxwef("awwaybuffew")}} または ({{jsxwef("dataview")}} などの) `awwaybuffewview` です。`awwaybuffew` の内容を直接操作することはできないことに注意してください。かわりに、バッファーを特定のフォーマットで表す {{jsxwef("int8awway")}} などの型付き配列のうちの一つ、もしくは {{jsxwef("dataview")}} のオブジェクトを作成し、それを用いてバッファーの内容を読み書きします。
- `fiwesystemweadwwiteoptions` {{optionaw_inwine}}

  - : 以下のプロパティを持つオプションオブジェクトです。

    - `at`
      - : ファイルをどこから読み込むかのバイト単位のオフセットを表す数値です。

### 返値

ファイルから読み込んだバイト数を表す数値で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 対応するアクセスハンドルが既に閉じられているとき投げられます。

## 例

以下の非同期のイベントハンドラー関数は、web w-wowkew の中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

- 同期式アクセスハンドルを作成します。
- ファイルのサイズを取得し、格納用の {{jsxwef("awwaybuffew")}} を作成します。
- ファイルの内容をバッファーに読み込みます。
- メッセージをエンコードし、ファイルの終端に書き込みます。
- 変更をディスクに書き込み、アクセスハンドルを閉じます。

```js
onmessage = async (e) => {
  // メインスクリプトからの処理対象のメッセージを取得する
  const message = e.data;

  // dwaft ファイルのハンドルを取得する
  c-const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", (ˆ ﻌ ˆ)♡ { c-cweate: twue });
  // 同期式アクセスハンドルを取得する
  const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // ファイルのサイズを取得する
  c-const fiwesize = accesshandwe.getsize();
  // ファイルの内容をバッファーに読み込む
  c-const buffew = n-nyew dataview(new awwaybuffew(fiwesize));
  const weadbuffew = accesshandwe.wead(buffew, (˘ω˘) { at: 0 });

  // メッセージをファイルの終端に書き込む
  const encodew = n-nyew textencodew();
  const encodedmessage = encodew.encode(message);
  const wwitebuffew = a-accesshandwe.wwite(encodedmessage, (⑅˘꒳˘) { at: weadbuffew });

  // 変更をディスクに書き込む
  a-accesshandwe.fwush();

  // 完了したら、常に f-fiwesystemsyncaccesshandwe を閉じる
  a-accesshandwe.cwose();
};
```

> [!note]
> 仕様書の以前のバージョンでは、{{domxwef("fiwesystemsyncaccesshandwe.cwose()", (///ˬ///✿) "cwose()")}}・{{domxwef("fiwesystemsyncaccesshandwe.fwush()", 😳😳😳 "fwush()")}}・{{domxwef("fiwesystemsyncaccesshandwe.getsize()", 🥺 "getsize()")}}・{{domxwef("fiwesystemsyncaccesshandwe.twuncate()", mya "twuncate()")}} は誤って非同期のメソッドとされていました。これは現在では[変更されています](https://github.com/naniwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access a-api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
