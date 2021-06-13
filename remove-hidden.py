from pathlib import Path

fixes = []


class Stop(Exception):
    """exit early"""


NEEDLE = """
<p class="hidden">이 페이지의 호환성표는 구조화된 데이터로부터 생성되었습니다. 만약 그 데이터에 기여하고 싶으시면 <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> 를 참고하시고 요청을 보내주시기 바랍니다.</p>
"""


def fix(path):
    if len(fixes) > 15:
        raise Stop

    new_content = ""
    with open(path) as f:
        content = f.read()
        if NEEDLE in content:
            new_content = content.replace(NEEDLE, "")

    if new_content:
        print("CHANGE", path)
        with open(path, "w") as f:
            f.write(new_content)
        fixes.append(path)


def walk(root: Path):
    for thing in root.iterdir():
        if thing.is_dir():
            walk(thing)
        elif thing.name == "index.html":
            fix(thing)


try:
    walk(Path("files/ko"))
except Stop:
    print("MAX REACHED!")
print(len(fixes))