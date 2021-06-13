from pathlib import Path

fixes = []


class Stop(Exception):
    """exit early"""


NEEDLE = """
<div class="hidden">이 설명자는 아직 <a href="https://github.com/mdn/data/blob/master/css/at-rules.json">https://github.com/mdn/data/blob/master/css/at-rules.json</a>에 등재되지 않았습니다.</div>
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