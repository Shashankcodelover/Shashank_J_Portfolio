import re

with open('C:/Users/Preetham.j/Desktop/My-Stufs/git hub proj/Shashank_J_Portfolio/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

with open('new_projects_dump.txt', 'r', encoding='utf-8') as f:
    new_projects = f.read()

start_tag = '<section id="projects"'
end_tag = '</section>'

start_idx = content.find(start_tag)
end_idx = content.find(end_tag, start_idx) + len(end_tag)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_projects + content[end_idx:]
    with open('C:/Users/Preetham.j/Desktop/My-Stufs/git hub proj/Shashank_J_Portfolio/index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully replaced projects section.')
else:
    print('Could not find projects section.')
