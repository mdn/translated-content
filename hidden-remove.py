from pathlib import Path
import re

fixes = []


class Stop(Exception):
    """exit early"""


NEEDLE = """<.*? class="hidden">.*?<a href="https:\/\/github.com\/mdn\/browser-compat-data">https:\/\/github.com\/mdn\/browser-compat-data<\/a>.*?<\/.*?>"""


def fix(path):
    if len(fixes) > 15:
        raise Stop

    new_content = ""
    with open(path) as f:
        content = f.read()
        p = re.compile(NEEDLE)
        match_lists = p.findall(content)
        for i in match_lists:
            new_content = content.replace(i, "")
        # if NEEDLE in content:
        #     new_content = content.replace(NEEDLE, "")

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