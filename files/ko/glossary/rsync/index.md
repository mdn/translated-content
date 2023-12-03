---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/)는 증분 파일 전송을 제공하는 오픈 소스 파일 동기화 도구입니다. 안전하지 않은 전송과 SSH와 같은 보안 전송을 통해 사용할 수 있습니다. 대부분의 Unix 기반 시스템 (예, macOS와 Linux)과 Windows에서 사용할 수 있습니다. rsync를 사용하는 GUI 기반 도구도 있습니다(예, [Acrosync](https://acrosync.com/mac.html)).

기본 명령어는 아래와 같습니다.

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options`은 대시 뒤에 하나 이상의 문자가 오는 것입니다. 예를 들어, 자세한 오류 메시지의 경우 `-v`, 백업을 만드는 경우 `-b`입니다. [rsync man 페이지](https://linux.die.net/man/1/rsync) ("Options summary"를 검색하세요) 에서 전체 옵션 목록을 확인하세요.
- `SOURCE`는 복사하거나 동기화하려는 로컬 파일 또는 디렉터리의 경로입니다.
- `user@`는 파일을 복사하려는 원격 서버에 있는 사용자의 자격 증명입니다.
- `x.x.x.x`는 원격 서버의 IP 주소입니다.
- `DESTINATION`는 원격 서버에서 디렉터리나 파일을 복사하려는 위치의 경로입니다.

아래와 같이 `-e` 옵션을 사용하여 SSH를 통해 연결할 수도 있습니다.

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

rsync에 대해 [공식 웹사이트](https://rsync.samba.org/examples.html) 및 [위키백과 항목](https://en.wikipedia.org/wiki/Rsync#Examples) 등 인터넷에 수많은 예제가 있습니다.
