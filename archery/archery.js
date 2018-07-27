{
    "slides": [
        {
            "title": "Archery Game",
            "text": "In this archery game, the player must shoot arrows past blocks to hit apples.\n[Completed Archery game demo](complete.gif)\nThe complete game can be played on [the Scratch website](TODO)"
        },
        {
            "title": "Make the Cat Look Like Robin Hood",
            "text": "Click the blue-white (i) button and rename Sprite1 to Cat.\n[instruction animation](1.gif)"
        },
        {
            "title": "Make the Cat Look Like Robin Hood",
            "text": "On the Costumes tab, click the \"Convert to bitmap\" button.\n[instruction animation](2.gif)"
        },
        {
            "title": "Make the Cat Look Like Robin Hood",
            "text": "Draw a green Robin Hood hat with red feather on the cat.\n[instruction animation](3.gif)"
        },
        {
            "title": "Make the Cat Look Like Robin Hood",
            "text": "Draw a bow in the cat's hand.\n[instruction animation](4.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "On the Scripts tab, add the following code to Cat:\nwhen green flag> clicked\nforever\n[instruction animation](5.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "Add the following code to Cat:\nif &lt;key w pressed&gt; then\n[instruction animation](6.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "Add the following code to Cat:\nchange y by 10\n[instruction animation](7.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "Add the following code to Cat:\nif &lt;key s pressed&gt; then\n[instruction animation](8.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "Add the following code to Cat:\nchange y by -10\n[instruction animation](9.gif)"
        },
        {
            "title": "Program the W and S Keys to Move the Cat Up and Down",
            "text": "Move the cat to the left side of the Stage.\n[instruction animation](10.gif)"
        },
        {
            "title": "Test #1",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the green flag> and press the W and S keys to move the Cat up and down.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Draw the Arrow",
            "text": "Draw the arrow with a light gray arrow head. MAKE SURE THE ARROW HEAD IS ON THE CROSSHAIRS IN MIDDLE OF THE PAINT EDITOR.\n[instruction animation](11.gif)"
        },
        {
            "title": "Draw the Arrow",
            "text": "Rename the arrow sprite to \"Arrow\".\n[instruction animation](12.gif)"
        },
        {
            "title": "Draw the Arrow",
            "text": "Add the following code. Try different sizes for the arrow until you find a good size. Your size might not be 100:\nwhen green flag> clicked\nset size to 50%\n[instruction animation](13.gif)"
        },
        {
            "title": "Create Variables",
            "text": "Create variables for the \"Score\" and \"arrow is ready\".\n[instruction animation](14.gif)"
        },
        {
            "title": "Create Variables",
            "text": "Add this code to the Arrow sprite:\nset arrow is ready to yes\nset Score to 0\n[instruction animation](15.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Cat sprite:\nwhen space key pressed\nif then\n[instruction animation](16.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Cat sprite:\narrow is ready = yes\n[instruction animation](17.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Cat sprite:\ncreate clone of Arrow\n[instruction animation](18.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:\nwhen I start as a clone\n[instruction animation](19.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:\nset arrow is ready to no\ngo to Cat\n[instruction animation](20.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:point towards mouse-pointer\nmove 30 steps\n[instruction animation](21.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:\nshow\nforever\n[instruction animation](22.gif)"
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:\nmove 25 steps\n[instruction animation](23.gif)"
        },
        {
            "title": "Test #2",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the green flag> and press space to shoot an arrow. Note that at this point you can only shoot once.[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Add Code to Shoot Arrow",
            "text": "Add the following code to the Arrow sprite:\nhide\n[instruction animation](24.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Click the Face button and select Button3.\n[instruction animation](25.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Click the Costumes tab, and use the Fill tool to make the block purple.\n[instruction animation](26.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nwhen green flag clicked\nset size to 50%\n[instruction animation](27.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\ngo to x: 100 y: -180\n[instruction animation](28.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite\nforever\ncreate clone of myself\n[instruction animation](29.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nwait (pick random 0.8 to 2) secs\n[instruction animation](30.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nwhen I start as a clone\nshow\n[instruction animation](31.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nrepeat until [ ] &gt; [ ]\n[instruction animation](32.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\ny position &gt; 170\n[instruction animation](33.gif)"
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nchange y by 4\ndelete this clone\n[instruction animation](34.gif)"
        },
        {
            "title": "Test #3",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the Green Flag and watch the blocks move up.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Add the Purple Blocks That Float Up",
            "text": "Add the following code to the Button3 sprite:\nhide\n[instruction animation](35.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Click the face button and select Apple.\n[instruction animation](36.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nwhen green flag clicked\ngo to x: 200 y: 180\n[instruction animation](37.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nforever\ncreate clone of myself\n[instruction animation](38.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nwait (pick random 0.6 to 2) secs\n[instruction animation](39.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nwhen I start as a clone\nshow\n[instruction animation](40.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nrepeat until [ ] &lt; [ ]\n[instruction animation](41.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\ny position < -170\n[instruction animation](42.gif)"
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nchange y by -4\ndelete this clone\n[instruction animation](43.gif)"
        },
        {
            "title": "Test #4",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the Green Flag and watch the apples float down.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Make the Apples Float Down",
            "text": "Add the following code to the Apple sprite:\nhide\n[instruction animation](44.gif)"
        },
        {
            "title": "Make the Arrows Bounce Off the Blocks",
            "text": "Add the following code to the Arrow sprite:\nif then\n[instruction animation](45.gif)"
        },
        {
            "title": "Make the Arrows Bounce Off the Blocks",
            "text": "Add the following code to the Arrow sprite:\ncolor [ ] is touching [ ]?\n[instruction animation](46.gif)"
        },
        {
            "title": "Make the Arrows Bounce Off the Blocks",
            "text": "Click the left color box, then the grey arrow head, then the right color box, then the purple block.\n[instruction animation](47.gif)"
        },
        {
            "title": "Make the Arrows Bounce Off the Blocks",
            "text": "Add the following code to the Arrow sprite:\nrepeat 10\nturn counterclockwise 35\nmove 25 steps\n[instruction animation](48.gif)"
        },
        {
            "title": "Make the Arrows Bounce Off the Blocks",
            "text": "Add the following code to the Arrow sprite:\nset arrow is ready to yes\ndelete this clone\n[instruction animation](49.gif)"
        },
        {
            "title": "Test #5",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the Green Flag and fire arrows at the purple blocks. Make sure they bounce off.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Add the following code to the Arrow sprite:\nif color [ ] is touching [ ]? then\n[instruction animation](50.gif)"
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Click the left color box, then the grey arrow head, then the right color box, then the red apple.\n[instruction animation](51.gif)"
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Add the following code to the Arrow sprite:\nchange Score by 1\nset arrow is ready to yes\n[instruction animation](52.gif)"
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Add the following code to the Arrow sprite:\nrepeat until [ ] &lt; [ ]\n[instruction animation](53.gif)"
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Add the following code to the Arrow sprite:\ny position &lt; -170\n[instruction animation](54.gif)"
        },
        {
            "title": "Make the Arrows Hit the Apples",
            "text": "Add the following code to the Arrow sprite:\nchange y by -4\ndelete this clone\n[instruction animation](55.gif)"
        },
        {
            "title": "Test #6",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the Green Flag and shoot arrows at the apples. Make sure they stick into the apples.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Make the Arrows Disappear If You Miss",
            "text": "Add the following code to the Arrow sprite:\n if [ ] &gt; [ ]\n[instruction animation](56.gif)"
        },
        {
            "title": "Make the Arrows Disappear If You Miss",
            "text": "Add the following code to the Arrow sprite:\nx position &gt; 230\n[instruction animation](57.gif)"
        },
        {
            "title": "Make the Arrows Disappear If You Miss",
            "text": "Add the following code to the Arrow sprite:\nset arrow is ready to yes\ndelete this clone\n[instruction animation](58.gif)"
        },
        {
            "title": "Test #7",
            "text": "Click on File > Save. Test to make sure your program has the following:\n(Click the Green Flag and make sure the arrows disappear if they reach the right edge of the stage.)[checkbox]\nIf the program doesn't do all of these things, check the previous steps to make sure you copied the code exactly. If you still can't figure it out, ask for help."
        },
        {
            "title": "Congratulations! You're done!",
            "text": "You did it! Now share your project so other people can see it and learn from its code!"
        }
    ]
}