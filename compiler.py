import os

# get a list of the files in the directory 
def get_source_file_paths(path):
    files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
    return [(f, path + f) for f in files]

# create anchor tags from a list of files and paths 
def format_file_paths(files):
    return "".join(["<a href='{}'>{}</a>".format(fp, f) for f, fp in files])

# replace [[content]] in a string with the actual content 
def insert_content_into_template(template, content):
    return template.replace("[[content]]", content)

def get_template_content(path):
    with open(path, 'r') as template:
        content = template.read()
        template.close()
        return content

def save_index_file(content):
	with open('index.html', 'w') as index:
		index.write(content) 
		index.close() 

if __name__ == "__main__":
    files = get_source_file_paths("content/")
    html = insert_content_into_template(get_template_content("indexTemplate.html"), 
                                        format_file_paths(files))
    save_index_file(html)
    print("created index.html with links to {} posts".format(len(files)))