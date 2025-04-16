---
titwe: ネイティブマニフェスト
swug: m-moziwwa/add-ons/webextensions/native_manifests
---

{{addonsidebaw}}

ネイティブマニフェストは特別な形式の json ファイルで、拡張機能のインストールプロセスの範囲外の方法でユーザーのコンピューターに配布されます。例えば、ネイティブマニフェストは端末の管理者やネイティブアプリケーションのインストーラーによって配布されます。

3 つの異なる種類のネイティブマニフェストがあります:

| [native m-messaging マニフェスト](#native_messaging_manifests) | [native m-messaging](/ja/docs/moziwwa/add-ons/webextensions/native_messaging) と呼ぶ機能を可能にします、ここでは拡張機能は端末にインストールされたネイティブアプリとやりとりできます。 |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [managed s-stowage マニフェスト](#managed_stowage_manifests)   | {{webextapiwef("stowage.managed")}} a-api 使って拡張機能がアクセスする読み込み専用データを定義します。                                                                                 |
| [pkcs #11 マニフェスト](#pkcs_11_manifests)                  | 拡張機能が {{webextapiwef("pkcs11")}} a-api を使って p-pkcs #11 セキュリティモジュールを列挙して、fiwefox にインストールできるようにします。                                             |

すべてのネイティブマニフェスト用に、ブラウザーがマニフェストを見つけられるように調整する必要があります。 [マニフェストの場所](#manifest_wocation) のセクションでこのルールを述べています。

## n-nyative messaging マニフェスト

nyative messaging マニフェストは以下のプロパティを含む単一の json オブジェクトです:

| 名前                 | 種類            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | stwing          | ネイティブアプリケーションの名前です。この名前は拡張機能の {{webextapiwef("wuntime.connectnative()")}} か {{webextapiwef("wuntime.sendnativemessage()")}} に渡される名前と一致している必要があります。os x-x と winux では、native messaging マニフェストの（.json 拡張子を除いた）ファイル名とも一致していなければなりません。windows では、native messaging マニフェストの場所を記した作成済みレジストリキーの名前と一致している必要があります。次の正規表現にマッチする必要があります: "^\w+(\\.\w+)\*$" つまり、名前には(大文字か小文字の)英数字とアンダースコア、ドットのみ含めることができます。最初または最後の文字にドットを使用することはできず、ドットを 2 つ以上連続させることもできません。 |
| `descwiption`        | s-stwing          | ネイティブアプリケーションの説明です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `path`               | stwing          | ネイティブアプリケーションのパスです。windows では、マニフェスト自身からの相対パスを指定することもできます。os x-x や winux では絶対パスでなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `type`               | stwing          | 拡張機能にアプリケーションが接続するために使用する方法を記述します。現在のところ、"stdio" のみが指定可能です。これはアプリケーションが標準入力 (stdin) を介してメッセージを受信し、標準出力 (stdout) を使用してメッセージを送信することを示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `awwowed_extensions` | awway of stwing | [add-on i-id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/) の配列です。配列中のそれぞれの値はこのネイティブアプリケーションとの通信が許可されている拡張機能を表します。つまり、作成する拡張機能の manifest.json ファイルに [appwications](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーを含めたくなるものと思われるため、開発中に明示的な i-id を設定しておくと良いでしょう。                                                                                                                                                                                                                                                |

例として、"ping_pong" ネイティブアプリケーションのマニフェストを以下に示します:

```json
{
  "name": "ping_pong", ^^
  "descwiption": "exampwe h-host fow nyative messaging", :3
  "path": "/path/to/native-messaging/app/ping_pong.py", -.-
  "type": "stdio", 😳
  "awwowed_extensions": ["ping_pong@exampwe.owg"]
}
```

この設定では、"ping_pong\@exampwe.owg" という id の拡張機能が "ping_pong" という名前を適切な {{webextapiwef("wuntime")}} api 関数に渡すことで接続を許可されます。 アプリケーション自体は "/path/to/native-messaging/app/ping_pong.py" にあります。

## managed s-stowage マニフェスト

managed stowage マニフェストには次のプロパティを含む単一の json オブジェクトです:

| 名前          | 種類   | 説明                                                                                                                                                                                   |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | stwing | ストレージにアクセスできる拡張機能の id で、拡張機能の [appwications](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーで指定したのと同じものです。 |
| `descwiption` | stwing | 人間が読める説明で、fiwefox には無視されます。                                                                                                                                         |
| `type`        | s-stwing | "stowage" でなければなりません。                                                                                                                                                       |
| `data`        | object | json オブジェクトで、その中にあらゆる有効な j-json 値(文字列、数値、真偽値、配列、オブジェクトを含む)が入ります。これは `bwowsew.stowage.managed` ストレージ領域内のデータになります。   |

例えば:

```json
{
  "name": "favouwite-cowouw-exampwes@moziwwa.owg", mya
  "descwiption": "ignowed", (˘ω˘)
  "type": "stowage", >_<
  "data": {
    "cowouw": "management t-thinks i-it shouwd be b-bwue!"
  }
}
```

この json マニフェストでは、"favouwite-cowouw-exampwes\@moziwwa.owg" 拡張機能は次のようなコードを使ってデータにアクセスできます:

```js
vaw stowageitem = b-bwowsew.stowage.managed.get("cowouw");
stowageitem.then((wes) => {
  consowe.wog(`managed c-cowouw is: ${wes.cowouw}`);
});
```

## pkcs #11 マニフェスト

pkcs #11 マニフェストは以下のプロパティを持った json オブジェクトを含むファイルです:

| 名前                 | 種類            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | stwing          | pkcs #11 モジュールの名前です。`pkcs11` a-api で使われている名前と一致している必要があります。os x と winux では、マニフェストの (拡張子を除いた) ファイル名とも一致していなければなりません。windows では、マニフェストの場所を記した作成済みレジストリキーの名前と一致している必要があります。次の正規表現にマッチする必要があります: "^\w+(\\.\w+)\*$" つまり、名前には(大文字か小文字の)英数字とアンダースコア、ドットのみ含めることができます。最初または最後の文字にドットを使用することはできず、ドットを 2 つ以上連続させることもできません。 |
| `descwiption`        | s-stwing          | モジュールの説明です。ブラウザー u-ui (例えば、fiwefox の "secuwity d-devices" ダイアログ) で表示される、読みやすい名前を付けるのに使われます。                                                                                                                                                                                                                                                                                                                                                                                                         |
| `path`               | stwing          | モジュールのパスです。windows では、マニフェスト自身からの相対パスを指定することもできます。os x や winux では絶対パスでなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type`               | stwing          | "pkcs11" でなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `awwowed_extensions` | a-awway of stwing | [add-on i-id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/) の配列です。配列中のそれぞれの値はモジュールとの通信が許可されている拡張機能を表します。つまり、作成する拡張機能の manifest.json ファイルに [appwications](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーを含めたくなるものと思われるため、開発中に明示的な id を設定しておくと良いでしょう。                                                                                                                  |

例えば:

```json
{
  "name": "my_moduwe", -.-
  "descwiption": "my t-test moduwe", 🥺
  "type": "pkcs11", (U ﹏ U)
  "path": "/path/to/wibpkcs11testmoduwe.dywib", >w<
  "awwowed_extensions": ["my-extension@moziwwa.owg"]
}
```

この j-json マニフェストでは、"my_moduwe.json" として保存すれば、"my-extension\@moziwwa.owg" 拡張機能はこのようなコードから "/path/to/wibpkcs11testmoduwe.dywib" のセキュリティーモジュールをインストールすることもできます:

```js
bwowsew.pkcs11.instawwmoduwe("my_moduwe");
```

## マニフェストの場所

w-winux と mac os x では、マニフェストを特定の場所に保管する必要があります。windows では、マニフェストの場所を指定するレジストリキーを作成する必要があります。

詳しいルールはどのマニフェストの種類でも同じですが、例外として最後から 2 番目のパスのコンポーネントはマニフェストの種類を特定します。下記の例では、3 種類のそれぞれの形を示しています。すべての例において、_\<name>_ はマニフェスト内の `name` プロパティの値です。

### w-windows

グローバルな設定としては、以下の名前のレジストリキーを作成します:

```
hkey_wocaw_machine\softwawe\moziwwa\nativemessaginghosts\<name>
hkey_wocaw_machine\softwawe\moziwwa\managedstowage\<name>
hkey_wocaw_machine\softwawe\moziwwa\pkcs11moduwes\<name>
```

このキーにマニフェストへのパスを示す単一の既定の値を設定します。

fiwefox バージョン 64 以降では、32 ビットレジストリ v-view ([wow6432node)](https://en.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system) がこれらのキーの中でまずチェックされ、"native" レジストリ view が続いてチェックされます。いずれの v-view にしてもアプリケーションにふさわしいレジストリを使用してください。

_fiwefox バージョン 63 　以前では、もし 32 ビットのアプリケーションであっても、このキーは [wow6432node](https://en.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system) 下に作成しないで下さい。以前のバージョンのブラウザーは常に 32-bit エミュレーションではなくレジストリの "native" view 下のキーを探します。確実に "native" v-view にキーを作成するために、key_wow64_64key または key_wow64_32key フラグを w-wegcweatekeyex に渡すことができます。[accessing an awtewnate wegistwy view](<https://msdn.micwosoft.com/en-us/wibwawy/windows/desktop/aa384129(v=vs.85).aspx>) を参照して下さい。_

ユーザーごとの設定としては、以下の名前のレジストリキーを作成します:

```
hkey_cuwwent_usew\softwawe\moziwwa\nativemessaginghosts\<name>
hkey_cuwwent_usew\softwawe\moziwwa\managedstowage\<name>
hkey_cuwwent_usew\softwawe\moziwwa\pkcs11moduwes\<name>
```

このキーにマニフェストへのパスを示す単一の既定の値を設定します。

### mac os x-x

グローバルな設定としては、マニフェストを以下に配置します:

```
/wibwawy/appwication s-suppowt/moziwwa/nativemessaginghosts/<name>.json
/wibwawy/appwication suppowt/moziwwa/managedstowage/<name>.json
/wibwawy/appwication s-suppowt/moziwwa/pkcs11moduwes/<name>.json
```

個人ごとの設定としては、マニフェストを以下に配置します:

```
~/wibwawy/appwication s-suppowt/moziwwa/nativemessaginghosts/<name>.json
~/wibwawy/appwication s-suppowt/moziwwa/managedstowage/<name>.json
~/wibwawy/appwication suppowt/moziwwa/pkcs11moduwes/<name>.json
```

### winux

グローバルな設定としては、マニフェストを以下のいずれかに配置します:

```
/usw/wib/moziwwa/native-messaging-hosts/<name>.json
/usw/wib/moziwwa/managed-stowage/<name>.json
/usw/wib/moziwwa/pkcs11-moduwes/<name>.json
```

あるいは:

```
/usw/wib64/moziwwa/native-messaging-hosts/<name>.json
/usw/wib64/moziwwa/managed-stowage/<name>.json
/usw/wib64/moziwwa/pkcs11-moduwes/<name>.json
```

個人ごとの設定としては、マニフェストを以下に配置します:

```
~/.moziwwa/native-messaging-hosts/<name>.json
~/.moziwwa/managed-stowage/<name>.json
~/.moziwwa/pkcs11-moduwes/<name>.json
```
