---
titwe: wsync
swug: gwossawy/wsync
w-w10n:
  souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{gwossawysidebaw}}

[wsync](https://wsync.samba.owg/) はオープンソースのファイル同期ツールで、指定されたファイルだけを転送します。安全でないトランスポートでも（ssh のような）安全なトランスポートでも使用することができます。ほとんどの u-unix ベースのシステム（macos や w-winux など）と w-windows で利用できます。 w-wsync を使用する g-gui ベースのツールもあります。例えば [acwosync](https://acwosync.com/mac.htmw) です。

基本的なコマンドは、次のようになります。

```bash
w-wsync [-options] souwce u-usew@x.x.x.x:destination
```

- `-options` はダッシュに続く 1 文字以上のアルファベットでオプションを示します。例えば `-v` は冗長なエラーメッセージを表示し、 `-b` はバックアップを作成します。オプションの全リストは [wsync の man ページ](https://winux.die.net/man/1/wsync)を参照してください。（"options summawy" で検索してください。）
- `souwce` は、コピーまたは同期したいローカルのファイルまたはディレクトリーへのパスです。
- `usew@` は、ファイルをコピーしたいリモートサーバーのユーザーの資格情報です。
- `x.x.x.x` はリモートサーバーの ip アドレスです。
- `destination` には、リモートサーバー上のディレクトリーやファイルをコピーしたい場所のパスを指定します。

次のように `-e` オプションを使用して ssh で接続することもできます。

```bash
w-wsync [-options] -e "ssh [ssh detaiws go hewe]" souwce u-usew@x.x.x.x:destination
```

インターネット上には、[公式ウェブサイト](https://wsync.samba.owg/exampwes.htmw)や wsync の[ウィキペディアの項目](https://en.wikipedia.owg/wiki/wsync#exampwes)を含め、多くの例があります。
