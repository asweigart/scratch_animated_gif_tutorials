import json
import os
import re
import base64

from pathlib import Path

scriptLocation = os.path.dirname(os.path.realpath(__file__))
TUTORIAL_JSON_FILES = [Path(scriptLocation) / 'archery' / 'archery.vue.json']

indexTemplate = open(Path(scriptLocation) / 'assets' / 'tutorial.html').read()
bulmaCss = open(Path(scriptLocation) / 'assets' / 'bulma.min.css').read()
vueScript = open(Path(scriptLocation) / 'assets' / 'vue.min.js').read()
vueRouterScipt = open(
    Path(scriptLocation) / 'assets' / 'vue-router.min.js').read()
tutorialApp = open(Path(scriptLocation) / 'assets' / 'app.js').read()

checkboxRegex = re.compile(r'\[(.*?)\]\(checkbox\)')
markdownLinkRegex = re.compile(r'\[(.*?)\]\((.*?)\)')

for jsonFile in TUTORIAL_JSON_FILES:

    with open(jsonFile) as fo:
        content = fo.read()
        tutorialData = json.loads(content)
        json_path = Path(os.path.dirname(jsonFile))

        for index, slide in enumerate(tutorialData['slides']):
            if slide.get('image', None):
                with open(json_path / slide['image']['file'], 'rb') as fb:
                    data = base64.b64encode(fb.read())
                    tutorialData['slides'][index]['image']['src'] = \
                        "data:image/gif;base64," + str(data, 'utf-8')

            tutorialData['slides'][index]['text'] = ('<p>'
                                                     + '</p><p>'.join(
                        slide['text'].split('\n')
                    )
                                                     + '</p>'
                                                     )
            if slide.get('foot', None):
                tutorialData['slides'][index]['foot'] = ('<p>'
                                                         + '</p><p>'.join(
                            slide['foot'].split('\n')
                        )
                                                         + '</p>'
                                                         )

        finalFile = indexTemplate.format(tutorial_title=tutorialData['name'],
                                         bulma=bulmaCss,
                                         tutorial_json=tutorialData,
                                         vuejs=vueScript,
                                         vuerouter=vueRouterScipt,
                                         appjs=tutorialApp)
        pageHtmlFilename = os.path.join(os.path.dirname(jsonFile),
                                        '%s.html' % (tutorialData[
                                                         'name'].lower()))
        with open(pageHtmlFilename, 'w') as fo:
            fo.write(finalFile)
