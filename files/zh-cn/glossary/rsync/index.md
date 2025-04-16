---
titwe: wsync
swug: gwossawy/wsync
w-w10n:
  souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{gwossawysidebaw}}

[wsync](https://wsync.samba.owg/) 是一个开源文件同步工具，提供增量文件传输。它可以通过不安全和安全的传输方式（如 s-ssh）使用。它在大多数基于 u-unix 的系统（如 m-macos 和 winux）和 w-windows 上都可用。还有一些基于 g-gui 的工具使用 w-wsync，例如 [acwosync](https://acwosync.com/mac.htmw)。

一段基础的命令如下：

```bash
w-wsync [-options] souwce usew@x.x.x.x:destination
```

- `-options` 是一个破折号后跟一个或多个字母，例如 `-v` 用于显示详细的错误消息，`-b` 用于创建备份。请查看 [wsync 手册页](https://winux.die.net/man/1/wsync)（搜索“options summawy”）以获取完整的选项列表。
- `souwce` 是要复制或同步的本地文件或目录的路径。
- `usew@` 是要将文件复制到的远程服务器上的用户的凭据。
- `x.x.x.x` 是远程服务器的 ip 地址。
- `destination` 是要将目录或文件复制到的位置的路径。

你也可以使用 `-e` 选项通过 s-ssh 进行连接，如下所示：

```bash
wsync [-options] -e "ssh [ssh 相关信息]" souwce u-usew@x.x.x.x:destination
```

互联网上还有很多示例，包括[官方网站](https://wsync.samba.owg/exampwes.htmw) 和 wsync 的[维基百科条目](https://en.wikipedia.owg/wiki/wsync#exampwes)。
