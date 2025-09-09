---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

`id` はマニフェストメンバーで、このウェブアプリケーションのための一意な識別子を指定するために使用します。

## 構文

```json-nolint
/* 絶対 URL */
"id": "https://example.com/myapp"

/* 相対 URL */
"id": "myapp/v2"

/* クエリー引数付きの URL */
"id": "myapp?version=2&mode=trial"
```

### 値

- `id`
  - : URL の形をとる文字列です。
    URL はこのウェブアプリの [`start_url`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) と同じオリジンでなければなりません。
    `id` が相対 URL の場合、 `start_url` のオリジンを使用して解決されます。 `id` 内のフラグメントは常に無視されます。
    `id` が指定されていない場合、または値が何らかの形で不正な場合（文字列でない、無効な URL、 `start_url` と同じオリジンでないなど）、 `start_url` の値が使用されます。

## 解説

マニフェストメンバーの `id` は、ウェブアプリの固有の識別子として機能します。これにより、ブラウザーはさまざまなアプリケーションを識別することができます。

- ブラウザーに、すでにインストールされているアプリケーションに一致しない `id` を持つアプリマニフェストがある場合、たとえそれが他のアプリケーションと同じ URL から配信されているとしても、そのマニフェストは別のアプリケーションの説明として扱われます。
- ブラウザーに、すでにインストール済みのアプリの `id` と一致する id を持つアプリマニフェストが存在する場合、その新しいマニフェストは、アプリが前回インストールされた URL とは異なる URL から提供されている場合でも、既存のアプリのマニフェストを置き換えるものとして扱われます。

> [!NOTE]
> `id` は URL のようには処理されますが、アクセス可能なリソースを指すわけではないので、アプリの[スコープ](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope)内に存在する必要はありません。

`id` は、ウェブアプリの一覧を収集するサービスワーカースクリプトによって、アプリケーションを固有に識別するために使用することもできます。

### 使用上のメモ

`id` メンバーを使用する際に覚えておきたい重要なポイントをいくつか示します。

- 推奨される方法として、先頭に `/` を使用すると、 `id` がルート相対 URL パスであることを指定します。
- `id` は `start_url` のオリジンに関連付けられているため、`id` の値である `../foo`、`foo`、`/foo`、`./foo` はすべて、元に関連する同じ識別子に解決されます。例えば、 `start_url` が `https://example.com/app/` の場合、これらの `id` の値はすべて `https://example.com/foo/` に解決されます。
- `id` の値を解決するときは、標準の URL エンコードとデコードのルールが適用されます。
- `id` 内のフラグメントは処理中に除去されます。例えば、 `id` を `foo#bar` に設定した場合は、 `foo` として解決されます。同様に、 `id` が未定義で、 `start_url` が `https://example.com/app/#home` の場合は、 `id` は `https://example.com/app/` に解決されます。
- `id` のクエリー引数は保持され、最終的に解決された識別子に含まれます。

### `id` の解像度を理解する

アプリの `start_url` が `https://example.com/my-app/home` であると想定します。次の表は、マニフェストの異なる `id` 値がどのように解決されるかを示しています。

| マニフェスト内の `id`         | 解決された `id`                    | 説明                                                                      |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| undefined                     | `https://example.com/my-app/home`  | 既定で `start_url` となる                                                 |
| `""`                          | `https://example.com/my-app/home`  | 空文字列は `start_url` に解決する                                         |
| `/`                           | `https://example.com/`             | ルート相対 URL                                                            |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | 相対パスを、クエリー引数を維持したまま `start_url` のオリジンに対して解決 |
| `foo#heading`                 | `https://example.com/foo`          | 相対パスを、フラグメントを削除して `start_url` のオリジンに対して解決     |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | オリジンをまたぐ URL は許可されておらず、 `start_url` で代替する          |
| `😀`                          | `https://example.com/%F0%9F%98%80` | URL 内にエンコードされた非 ASCII 文字                                     |

## 例

### 異なるアプリのバージョンの作成

次のマニフェストを持つウェブアプリを作成したとします。

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

その後、大幅な変更を加えたこのアプリの別のバージョンを作成し、それを別のアプリとして扱いたい場合は、マニフェストを以下のように追加します。

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

この場合、たとえ両方のマニフェストファイルが同じ URL から配信されているとしても、 `id` が異なるため、ブラウザーは新しいマニフェストを個別のアプリケーションの記述として扱います。その結果、ユーザーは両方のバージョンを同時に保有することができます。

### 既存のアプリの更新

次のマニフェストでウェブアプリを展開するシナリオを考えてみましょう。

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/old-app"
}
```

しかし、その後、アプリが別のパスに移されることが決まりました。その場合、マニフェストは次のようになります。

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/new-app"
}
```

ブラウザーは、 `id` 値が一致するため、この新しいマニフェストを既存のアプリケーションの改訂版として扱います。この場合、ユーザーには新しいアプリケーションのインストールを促すメッセージが表示されるのではなく、既存のアプリケーションの改訂版が提供されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) マニフェストメンバー
- [`start_url`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) マニフェストメンバー
