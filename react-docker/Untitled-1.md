

17:19
let's go for Ubuntu on the right side of the details of the image you'll see a command copy it and try executing it in

17:26
your terminal but before before we paste it first create a new empty folder on our desktop called Docker

17:34
course and then drag and drop it to our empty Visual Studio code window open up your empty terminal and paste the

17:42
command Docker pool Ubuntu it's going to do it using the default tag latest and it's going to take some time to pull it

17:50
as you can see it's working Docker initially checks if there are any images with that name on our machine if not it

17:59
searches for the docker Hub finds the image and automatically installs it on our machine now if we go back to Docker

18:07
desktop we'll immediately see an auntu image right here under images to confirm that we actually installed a whole

18:14
different operating system we can run a command that executes the image do you know how that process is called creating

18:22
a container so let's run docker run-it for interactive and then Ubuntu and press enter after you run this command head over to Docker desktop

18:37
and if you go to Containers you'll see a new container based off of the Ubuntu image coming back to our terminal you'll

18:45
see something different if you've ever tried Ubuntu before you'll notice that this terminal looks exactly like the

18:52
Ubuntu command line Let's test out some of the commands LS for list we we have cd home to move to our home directory MK

19:02
deer which is going to create a new directory called hello we can once again LS CD into hello to navigate to it we

19:11
can create a new hello- ubun to.tx we can LS to check it out if it's there and it is we have just used

19:22
different Ubuntu commands right here within our terminal amazing isn't it we are running an entirely different

19:29
operating system simply by executing a Docker image within a Docker container for now let's kill this terminal by

19:38
pressing this trash icon and navigate back to our Docker desktop now a bigger question awaits how do we create our own

19:47
Docker images we can start from a super simple Docker app that says hello world let's create a new folder called hello

19:58
Das Docker within it we can create a simple hello.js file and we can type something like console.log hello

20:11
Docker then comes the interesting part next we'll create a Docker file yep it's just Docker file like this no dots no

20:23
extensions vs code might prompt you to install a Docker extension and if it does just go go ahead and install it now

20:30
let's figure out what goes into the docker file do you remember the special Docker syntax we talked about earlier

20:38
well let's put it to use first we have to select the base image to run the app we want to run a Javascript file so we

20:45
can use the node runtime from the docker Hub we'll use this one with an Alpine version It's a lightweight version of

20:53
Linux so we can type something like from node 20- Alpine next we want to set the working directory to for slapp this is the

21:06
directory where commands will be run and then SLA is a standard convention so we can type work there and then type for/

21:17
slapp next we can write copy dot dot like this this will copy everything from our current directory to the docker

21:26
image the first Dot is the current directory on our machine and the second dot is the path to the current directory

21:35
within the container next we have to specify the command to run the app in this case CMD node hello.js will do the trick and now that

21:48
we have created our Docker file let's move into the folder where the docker file is located by opening up the

21:55
terminal and then running CD hello D Docker inside of here let's type Docker build DT and T stands for the tag which

22:07
is optional and if no tag is provided it defaults to the latest tag and finally the path to the docker file and in this

22:15
case that's hello- Docker dot because we're right there and press enter it's building it and I think it

22:25
succeeded great to verify that the image has been created or not we can run a command Docker images and you can see

22:34
that we have two images Ubuntu as well as hello Docker created 16 seconds ago now if you're a more visual person you

22:44
can also visit Docker desktop here if you head to images you can see all of the images we have created so

22:52
far now that we have our image let's run or containerize it to see what happens so if we go back we can run Docker run

23:01
hello- Docker there we have it an excellent conso log if we go back to Docker desktop and then open up that

23:13
container and navigate inside of the files you'll see a lot of different files and folders but there is one

23:22
special file here want to make a guess yes it's app which we created in Docker file moving inside it we can see that it

23:30
contains two of the same files we have in our application Docker file and hello JS exact replica also if we want to open

23:39
up our application in Shell mode similar to what we did with Ubuntu we have to run Docker run it hello- doer

23:49
sh this puts us direct directly within the operating system and then you can simply run node hello Doge JS to see the

23:59
same output we can also publish the images we have created on Docker but before that let's build something a bit

24:06
more complex than the simple hello world and then let's publish it to the docker Hub which means that now we're diving

24:14
into the real deal dockerizing react GS applications let's dockerize our first react application I'm going to do that

24:23
by quickly spinning up a simple react project by running the command mpm create V at latest and then react D doer

24:33
as the folder name if you press enter it's going to ask you which flavor of JavaScript you want in this case let's

24:40
go with react sure we can use subscript and we can now CD into react Das doer and we won't run any mpm install or mpm

24:50
run Dev because the dependencies will be installed within our dock Riz container so with that said now if we clear it we

24:59
are within react Docker and you can see our new react application right here so as the last time you already know the

25:07
drill we need to create a new file called Docker file as you can see it automatically gets this icon and it's

25:14
going to be quite similar to the original Docker file that we had but this time I want to go into more depth

25:20
about each of these commands so you know exactly what they do and because of that below this course you can find a

25:28
complete Docker file for our react Docker application copy it and paste it here once you do that you should be able

25:36
to see something that looks like this it seems like there's a lot of stuff but there really isn't it's just a couple of

25:43
commands but I wanted to take my time to deeply explain all of the commands we're using right here so let's go over all of

25:52
that together first we need to set the base image to create the image for react app and we are setting it up from node

26:01
20 Alpine it's just a version 20 of node you can use any other version you want and in these courses I want to teach you

26:09
how to think for yourself not necessarily just replicate what I'm doing here so if you hover over the

26:15
command you can see exactly what it does set the base image to use for subsequent instructions from must be the first

26:23
instruction in a Docker file and you can see a couple of examples you can use use a from base image or you can even add a

26:30
tag or a digest in this case we're adding a tag of a specific version but it's not necessary and if you click

26:37
online documentation you can find even more instructions on exactly how you can use this command next we have to play

26:45
with permissions a bit now I know that these couple of commands could be a bit confusing but we're doing it to protect

26:52
our new container from Bad actors and users wanting to do something bad with it so because of that we create a new

27:00
user with permissions only to run the app the S is used to create a system user and that g is used to add that user

27:10
to a group this is done to avoid running the app as a root user that has access to everything that way any vulnerability

27:18
in the app can be exploited to gain access to the whole system this is definitely not mandatory but it's

27:24
definitely a good practice to run the app as a non user which is exactly what we're doing here we're creating a system

27:31
user adding it to the user group and then we set the user to run the app user app and you can see more information

27:39
about right here set the username to use when running the image next we set the working directory to SLA and then we

27:48
copy the package Json and package log Json to the working directory this is done before copying the rest of the

27:55
files to take advantage of of docker's cache if the package Json and package log Json files haven't changed Docker

28:03
will use the cache dependencies so copy files or folders from source to destination in the images file system so

28:13
first you specify what you want to copy from the source and then you provide a path where you want to paste it

28:19
to next sometimes the ownership of the files in the working system is changed to root and thus the app can't access

28:27
the files and throws an error E access permission denied to avoid this change the ownership of the files to the root

28:34
user so we're just changing it back from what we did above then we change the ownership of the app directory to the

28:41
app user by running a new command in this case CH own where we specify which user and group and directory we're

28:49
changing the access to and then we change the user back to the app user and once again if these commands are not

28:56
100% clear no worries this is just about playing with user permissions to not let Bad actors play with our container

29:03
finally we install dependencies copy the rest of the files to the working directory expose the port 5173 to tell

29:11
Docker that the container listens on that specifi Network and then we run the app if you want to learn about any of

29:17
these commands hover over it you can already to get a lot of info and then go to online documentation if you need even

29:23
more with that said that is our Docker file another great practice that we can do is just go right here and create another

29:32
file similar tog ignore this time it's called Docker ignore and here you can add nodecore modules just to Simply

29:42
exclude it from Docker because we don't really need it in our node modules on our GitHub we don't need it anywhere not

29:49
even in Docker Docker is playing with our package Json and package lock Json and then rebuilds it when it needs to

29:57
now now finally once we have our Docker file we are ready to build it we can do that by opening up a new terminal

30:04
navigating to react Docker and we can build it by running the command Docker build- t for tag which we can leave as

30:13
default react Das Docker which is the name of the image and then dot to indicate that it's in the current

30:20
directory and finally press enter this is going to build out the image but we already know that an image is not too

30:28
much on its own to use the image we have to actually run it so let's run it by running the command Docker run react D

30:37
Docker and press enter as you can see it built out all of the packages needed to run our app and it seems to be running

30:45
on Local Host 5173 but if we open it up it looks like the site isn't showing even though we specified that expose endpoint right

30:55
here saying that we're listening on 5173 so why is it not working well first we need to understand that expose does

31:05
only one job and it's to inform Docker that the container should listen to that specific exposed port in runtime that

31:13
does make sense but then why didn't work well it's because we know on which board the docker container will listen to

31:20
Docker knows it and so does the container but someone is missing that information any guesses well it's the host is the main computer

31:30
we're using to run it as we know containers run in isolated environments and by default they don't expose their

31:38
ports to the host machine or anyone else this means that even if a process inside the container is listening on a specific

31:46
Port the port is not accessible from outside the container and to make our host machine aware of that we have to

31:53
utilize a concept known as Port mapping it's a concept in Docker that allows us to map boards between the docker

32:01
container and the host machine it's exactly what we want to do so to do that let's kill our entire terminal by

32:10
pressing this trash icon reopen it reigate to react Das doer and let's run the same command Docker run and then

32:20
we're going to add a p flag right here and say map 5173 in our container to 51 73 on our host machine and then specify

32:30
which image do we want to run and press enter now as you can see it seems to be good but if I run it same things happens

32:39
again it's not docker's fault but it's something that we missed it's vit if you read the logs right here it's going to

32:48
say use-- host to expose so we have to expose that port for V 2 so let's modify our p pack a Json by going right here

33:00
and adding the dash dash host to expose our Dev environment and now again we'll have to stop everything kill our

33:09
terminal reopen it rigate to react Docker and then run the image again which makes you wonder wouldn't it be

33:18
great if Docker does it on its own whenever we make some file changes and the answer is yes definitely and Docker

33:26
heard us later in the course I'll teach you how to use the latest Docker features that allow us to automatically

33:34
build images and save us from all of this hassle but I first want to teach you how to do it manually to understand

33:41
how cool Docker composes which I'm going to teach you later on so let's just rerun the same command and now we get an error this

33:51
means that something is already connected to that port and this indeed is true if you check out our containers

33:58
or images we have accumulated a large number of images so let's do a quick practice on how to clear out all of our

34:06
images or containers back in our terminal we can run a command Docker PS which is going to give us a list of all of the current

34:16
containers alongside their IDs images created status and more as well as on which ports are they listening on this

34:24
is for all the active running containers and if we want to get absolutely all containers we can run Docker ps- a and

34:33
here you can see absolutely all containers that we have that's a lot now the question is how do we stop a

34:40
specific container well we can stop it by running Docker stop and then use the name or the ID of a specific container

34:49
you can use the first three digits of the container ID or you can use the entire name so let's use c3d

34:58
c3d and if you get back the same command it means that it successfully stopped it if we go back to Containers you can see

35:06
that the c3d is no longer running but now let's say we have accumulated a large number of containers which we indeed have both the

35:15
images and containers so how can we get rid of all of the inactive containers we have created so far well we can do that

35:23
by running Docker container prune if you run that it's going to say this will remove all stopped containers so let's

35:30
press Y and that's fine we only had one that was stopped that we manually stopped and it pruned but you can also

35:38
use the command Docker RM to remove a specific container by name or its ID so let's try with this one

35:47
aa7 Docker RM aa7 and press enter here we get a response saying that we cannot stop a running container of course you

35:59
could always use the Das Das force and that's going to kill it we can verify right here these commands are great and

36:07
it's always great to know your way around the CLI but nowadays we also have Docker desktop which allows us to play

36:14
with it within a graphical user interface which makes things so much simpler you can simply use the stab

36:20
action to stop the container or you can use the delete action to delete a container it is that easy similarly you

36:29
can do that for images by selecting it and deleting all images and you can follow my process of deleting everything

36:35
right now I just want to ensure that we have a clean working environment before we build out our react example one more

36:43
time and while we're here if you have any volumes feel free to delete those as well there we go so moving back we want to First build

36:53
out our image and now let's repeat how to do that you simply have to run Docker build- T the name of the image and then

37:02
dot this is going to build out the image after you do that we have to run it with Port mapping included so that's going to

37:10
be Docker run- P map the ports and then the name of the container you want to run and press enter it's going to run it

37:20
and you can see a bit of a difference right now here it's exposed to the network and if you try to run Local Host

37:28
5173 you can see that this time it actually works that's great but now if we go back to our code go to Source app and change

37:40
this V and react to something like Docker is awesome and save it back on our Local Host you can see that it didn't make any

37:54
changes that's very unfortunate we hope that this container could somehow stay up toate with what we are

38:01
developing otherwise it would be such a pain to constantly rebuild containers with new changes this happens because

38:09
when we build the docker image and run the container the code is then copied into that container you can see all the

38:17
files right here and they're not going to change so even if you go right here to app and then source and then app TSX

38:25
right click it and click edit file you'll be able to see that here it still says V plus react so what can we do well we'll have

38:35
to further adjust our Command so let's simply stop our active container so we can then rerun a new one on the same

38:42
port let's go back to our Visual Studio code clear it make sure that you're in the react D Docker folder and we need to

38:51
run the same command then we have to also add a string sign dollar sign PWD close it and then say Colin slapp

39:02
and close it like so it seems a bit complicated doesn't it what this means is that we tell Docker to mount the current working directory

39:13
where we run the docker run command into the app directory inside the container this effectively means that

39:21
our local code is linked to the container and any changes we make locally will be immediately reflected

39:28
inside the running container this tiny PWD represents the current working directory over here it executes in the

39:36
runtime to provide a current working directory path and v v stands for volume that's because we're creating a volume

39:43
that's going to keep track of all of those changes remember that we talked about volumes before they try to ensure

39:49
that we always have our data stored somewhere but before you go ahead and press enter there's one more additional

39:55
flag we have to add to this command and that is yet another DV but this time slapp for/ nodecore modules why are we

40:08
doing this well we have to create a new volume for the node modules directory within the container we do this to

40:15
ensure that the volume Mount is available in its container so now when we run the container it will use the

40:22
existing node modules from the named volume and any change to the dependencies won't require a reinstall

40:29
when starting the container this is particularly useful in development scenarios where you frequently start and

40:36
stop containers during code changes so let's run it it's running on Local Host 5173 Docker is indeed awesome but now

40:48
the question is if we change it what's going to happen so we go here and say something like Docker is awesome but

40:56
also also add a couple of whales at the end press save and then you can see pmv update source appsx and now if we run it

41:06
we have a couple of whales right here there we go so whenever you change something you'll see the result

41:13
instantly in the UI that's amazing and even if we go back to our Docker desktop you can see that now we

41:20
have a volume that keeps track of these changes and if you go under containers go to our active container go to files

41:29
and then let's go to app Source app TSX and edit you can see that the changes are also reflected right here so that's

41:40
it you have successfully learned how to dockerize a front-end application not many developers can do that but you you

41:49
just getting started now that we have created our Docker image let me teach you how to publish it we we can do that

41:56
using the command line so let's go right here kill our current terminal reopen it and CD into react Docker next we can run Docker login and

42:10
if you already logged in with Docker desktop it should automatically authenticate you next we can publish our

42:16
image using this command Docker tag react Das doer then you need to add your username and the name of of the

42:27
image you can find your username by going to Docker desktop clicking on the icon in top right and then copying it

42:34
from there in my case it's JavaScript Mastery and then I'm going to do SL react DD it's okay if we don't provide

42:43
any tag right here as the default tag is going to be Colin latest also don't forget that below this course I provided

42:51
a complete list of all of the commands including different tag commands to help you get started with Docker anytime

42:58
anywhere so check them out and try running some of them finally let's publish our image and now we have to run

43:06
Docker push JavaScript Mastery or in this case your username SL react D Docker and this is going to actually

43:16
push it to our Docker Hub there we go now if you go back to Docker desktop you can see that we have a JavaScript

43:24
Master react Docker in image that is now actually pushed on the Hub and you can also check it out right here by going to

43:31
local Hub images and then you can see JavaScript Mastery has one latest image and another cool thing you can do is go to hub.

43:42
do.com where you can find your image published under repositories and then check out your account right here and

43:50
you'll be able to see your react Docker image right here live on docker Hub and now other people can run this image as

43:59
well and containerize their applications by using it how cool is that and that's all it is to it you have successfully

44:07
published your first Docker image but now that you know the basis let's find a more efficient way of dockerizing our

44:16
applications oh yeah developers are lazy so writing and running all of these commands for building images and

44:24
containers and then mapping them to host is just too much to do but it's not the only way we can improve or automate this

44:33
process with Docker compose and run everything our application needs to run through Docker using one small single

44:42
command yes we can use a single straightforward command to run the entire application so say hi to Docker compose

44:52
it's a tool that allows us to Define and manage multi-container Docker applications it uses a yaml file to

45:01
configure the services networks and volumes for your application enabling us to run and scale the entire application

45:09
with a single command we don't have to run 10 commands separately to run 10 containers for one application thanks to

45:17
Docker compose we can list all the information needed to run these 10 containers or more in a single file and

45:25
then run only one command that automatically triggers running the rest of the containers in simple words Docker

45:33
compose is like a chef's recipe for preparing multiple meals in a single dinner it allows us to Define and manage

45:41
the entire cooking process for recipes in one go specifying ingredients cooking instructions and how different parts of

45:49
the meal should interact with Docker compose we can serve up our entire culinary experience with just one

45:59
command and while we can manually create these files on our own and set things up Docker also provides us with a CLI that

46:09
generates these files for us it's called Docker inid using Docker inid we initialize our application with all the

46:17
files needed to dockerize it by specifying our Tech choices so let's go ahead and create another V project which we can use to

46:26
test out the features of Docker compose and Docker in it we can open up a terminal and then run mpm create V add

46:36
latest in this case we can call it v- project and press enter it's going to ask us a couple of questions it can be a react tapescript

46:46
application we can CD into it and please make sure that you are in the docker course meaning in the root of our folder

46:55
so so it needs to create it right next to react if you were in react before when you run this command it's going to

47:01
create it inside of it if that's the case deleted and just navigate to Docker course and then run the

47:08
command now we can CD into V project and we can learn how to use Docker in it it's so simple you simply

47:16
run Docker in it that's all there is to it and it's going to ask you many questions based off which it's going to

47:24
generate a perfect yaml file for you so what application platform are we planning on using in this case it's

47:31
going to be node so you can simply press enter what version you can just press enter one more time to verify what

47:38
they're saying in parenthesis 20 is fine with us mpm is good do we want to use mpm run build no actually uh in this

47:48
case we're going to say no and we're going to say mpm run Dev that's what we want to use and the server is going to

47:55
to be 5173 and that's it we can see that this has generated three new FS for us the docker file which we already know a lot about this

48:07
one has some specific details in it but you can see that again it's based off of the same thing it starts from a specific version

48:16
sets up the environment variables sets up the working directory and run some commands we also have a Docker ignore

48:23
where we can ignore some additional files and then there's this new file compose do yaml while all of these files are

48:32
important with using do compose yaml is the most important one and you can read all of these comments but for now I just

48:39
want to delete them to show you what it is comprised of we simply Define which Services we want our apps or containers to use we

48:49
have a server app where we build the context specify environment variables and specify the ports of course these can get much more

48:58
complicated in case you have multiple Services you want to run which is exactly what I want to teach you right

49:04
now here they were even kind enough to provide an example of how you would do that with running a complete postgress

49:11
database so you can specify the database database image and additional commands you can run but more on that later we're

49:19
going to approach it from scratch for now we can leave this empty composed yaml and first let's focus on just the

49:27
regular Docker file in this case we can replace this Docker file with the one we have in a react Docker application so

49:35
copy this one right here and paste it into this new one this one we already know what it is doing now moving inside of the yaml file

49:46
here we can rename the server into web as that's a common practice for running web applications and not

49:54
servers we can also remove environment variables as we're not using any and we can leave the port finally we

50:04
need to add the volumes for our web service so we can say volumes make sure to provide a space here and then a dash

50:12
and that's going to be colon slapp and another Dash slapp SL node modules does this ring a bell it's similar what we have done before

50:24
manually by using the docker build command but now we're doing it all with this compos yaml file and now all we

50:32
have to do is run a new command Docker compose up and press enter and as you can see we get a permission denied you

50:44
never want to see this if you're in Windows maybe you're used to seeing this every day in which case you simply have

50:51
to close Visual Studio code right click it and then press press run as administrator that should give you all

50:58
the necessary permissions on Mac OS or Linux you can simply add PSE sudo before the command then it's going to ask you for

51:07
your password and it's going to rerun it with admin privileges so let's press enter and the process started it's

51:15
building it out now let's debug this further we get the same response we've gotten before hm what could this be Port

51:25
is or the allocated oh yeah we forgot to delete or close our container that we use for previous react application so

51:34
now we know the easy way to do it we simply go here we select it and we can stop it or delete it once it is stopped we can go back and

51:46
then simply rerun the command I want to lead you through all of the commands together even with the failed ones just

51:52
so you can get the feel of how you would debug or reapo specific aspects once you encounter errors that's what being a

52:00
real developer is getting stuck resolving the obstacle and getting things done and finally let's run the

52:09
command it's running it and if we go to Local Host 5173 ah the same thing as before any guesses the answer is that we once again

52:20
forgot to add the Das Dash host to our V Dev script right here so if we added stop our application from

52:29
running by pressing contrl C this is going to gracefully stop it the cool thing about Docker compose is that it's

52:37
also stopping the container that it's spun up and now that we have canceled our action we can try to rerun it with

52:44
pseudo doer compos up but this time with host included and press enter it's going to rebuild it and if we open it up now

52:54
it works but still this isn't optimal for developer experience is it every time we make a change to the package file we

53:03
have to rerun the container sure Docker compose solves the problem of showing upto-date code changes through volumes

53:11
letting us manage multiple containers in a single file and let us do both things building and running images but it still

53:20
doesn't do it automatically when we change something related to the package files or when we think it's needed to

53:27
rebuild the image and this is where our next Docker feature comes in Docker compose watch as its name suggests

53:37
Docker compose watch listens to our changes and does something like rebuilding our app rerunning the container and more it's a new feature

53:48
that automatically updates our service containers when you work so what specific things can we do do with Docker

53:57
compos watch we can do three main things first of all we can sync the sync operation moves changed files from our

54:06
computer to the right places in the container making sure that everything stays up toate in real time this is

54:15
handy when we're working on any app because it lets us instantly see any changes we make while the app is

54:23
running the second thing Docker compos watch can do is rebuild the rebuild process starts with the creation of new

54:32
container images and then it updates the services this is beneficial when rolling out changes to applications in

54:40
production guaranteeing the most recent version of the code is in operation and finally it can perform something known

54:48
as a sync restart the sync restart operation merges the sync and rebuild processes it begins by syncing modifications from

54:57
the host file system to The Container paths and then restarting the container this is beneficial during the

55:04
development and testing of applications ensuring that the most recent code version is active with immediate

55:11
reflection of changes in the running application and in simple terms Docker compos file watch is a cool tool that

55:19
keeps our cooking ingredients up to dat while we're in the kitchen to make sure it works properly we need to tell it how

55:27
to build each meal of course by defining the build section in our composed yaml file this way when we tweak a recipe or

55:36
make changes to our application Docker compos file watch knows how to update the meal or in this case the service

55:45
container to see it in action I have created a basic mern project so first download the starter code from below

55:53
this course then read rename it from starter to just m Docker and you can see that this is your typical full snack

56:02
application it has the front end which is a react application and a back end including a database now I'm going to

56:10
teach you how to dockerize it as you can see we're dockerizing everything from vanilla files over to react v m and

56:18
later on even nextjs I want to fulfill the promise of this video and that is to teach you how to dockerize any

56:27
application so let's start creating our first Docker files you know the drill don't you I will Begin by creating a new

56:35
Docker file for the frontend repository and here we can essentially paste everything we already had within

56:42
the react project because this is not going to change much so let's copy it and paste it right here now just to make

56:49
sure that this is a bit clearer and simpler to understand we can also remove the comments as now we we know what most

56:55
of these commands do so let's remove all of the comments and then we're going to have a much cleaner working environment

57:03
there we go and in this case as you already know doing this add group add user it's just an extra step to make to

57:12
add more safety to our container but it's not necessary so in this case we can even comment out these two commands

57:20
as well as these three commands so that leaves us with something like this get the from image set the working directory

57:28
copy it run it copy the entire app that got installed after running mpm install expose it and run it this is a simple

57:37
Docker file for our react application and now we have it within our front end directory don't forget that we can also

57:44
add a do Docker ignore which is going to just ignore nodecore modules and this entire Docker file we also have to have

57:54
it for the backend because it's going to be another container so here we can create a new file called Docker file and

58:02
paste everything we have here we can modify it slightly though because this time we want to expose it on a different

58:09
end point such as 8,000 and we also are going to run it by running mpm start not mpm run Dev that's it we can also add a

58:20
DOT Docker ignore and add the node modules because we want to ignore them on the backand side as well so now we

58:28
have everything we need besides one thing one thing that ties those two Services together and that my friends is

58:36
the compose do yaml file this allows us to specify everything we want to do with this specific Docker compose application

58:46
and I really took my time to comment this one file in its entirety so you can know exactly what each line does So

58:55
Below this course you can find a complete compos yaml file for the M application copy it and paste it here

59:03
it's about 100 lines long but it only has about 10 to 15 runnable lines everything else is just Commons but I

59:11
wanted to go over the comments with you so we can fully understand how to create a bit of a more complicated yaml file

59:18
that runs three different Services web which is her front-end application API which is her back end and the database

59:27
at the same time so let's dive deeper into this together first we have to specify the version of Docker compose

59:36
this is not a version of Docker this is just a version of the docker compose file we're using in this case 3.8 is

59:43
fine or if you're using some newer composed features then you want to bump it up according to the documentation next and most important

59:51
step is to define the services and containers to to be run you do that by saying services and then you define

59:58
Individual Services in this case we're defining the frontend service you can use any name but a standard naming

1:00:05
convention is to use web for the front end so as we move to this file I'm going to remove the comments to show you that

1:00:13
indeed it is much simpler than it looks like with all those comments we're going to dive deep into web soon but for now I

1:00:20
have collapsed it for you to see the general structure then we Define the API or the service container and then we

1:00:27
Define the DB service finally we Define the volumes to be used by the services and here we create a new volume of a

1:00:36
name anime as this app is going to be about showing anime shows so looking at this from a high level overview we have

1:00:44
the version we have the services and we have the volumes so now let's dive deeper into each one of the services

1:00:52
starting with web first we need to use depends on command to specify that service depends on another service in

1:01:03
this case we specify that the web depends on the API service this means that the API service will be started

1:01:10
before the web service okay that's important because to be able to use our front-end application we need to be able

1:01:17
to have the API loaded then we specify the buildt context for the web service what this means is simply hey tell me where the

1:01:27
docker file for this service is located in this case it is in/ front end then we specify which ports to

1:01:36
expose the first number is the port on the host machine and the second one is the port inside the container and we use

1:01:43
a concept known as Port mapping then you can specify any environment variables this is pretty simple we simply expose the V API URL to

1:01:53
Local Host 8 ,000 and then everything below is for the docker compos watch mode anything mentioned under develop

1:02:01
will be watched for changes by Docker compose watch and it will perform the action that's mentioned here so we say

1:02:09
develop and then we specify the files to watch for changes we watch for path front and package Jon and then rebuild the

1:02:18
container if there are any changes similarly we watch for package lock Json and then perform the action of rebuild

1:02:25
whenever something changes we also want to listen for the changes in the front end directory and then we simply call the sync action with

1:02:33
this one and this is it for the web service diving into the API it's similar we defined that the API service depends

1:02:41
on the database service we specify the build context for the API service we specify the ports to expose and do Port

1:02:50
mapping we specify the environment variables in this case the DB URL and finally we establish the docker compos

1:02:58
watch mode for the API service by specifying the file to watch for changes same thing as before in the

1:03:06
package Json and package lock Json and then watches for changes and then syncs it across the entire application and finally we have the

1:03:16
database here we want to specify the image we want to use for the DB service from the docker Hub if if we have a

1:03:24
custom image we can specify that in this format in the above two Services we're using the build context to build the

1:03:31
image for the service from the docker file so we specify the build ASF frontend or build ISB backend this is

1:03:41
interesting so we're not referring to existing images rather we build our own images from Docker file as we learned

1:03:48
before but in this case we are using image from the docker Hub so we specify it as image at latest you can find

1:03:57
the name and the tag and of course all of this is available on the docker Hub you can just explore the official images

1:04:03
so we use it we specify the ports and do Port mapping and generally you want to put the ports to your mongodb Atlas here

1:04:12
but for demo purposes we can use a local mongodb instance and usually mongodb runs in Port 27017 so we're exposing that port and

1:04:22
mapping it to the port inside the container how would you test this out locally to see if the database is live

1:04:28
well you can use a tool called mongodb Compass finally we specifi the volumes to mount for the DB service in this case

1:04:35
we want to mount the volume named anime inside the container at data DB directory this is done so that the data

1:04:44
inside of the mongodb container is persisted even if the container is stopped and this is it this is how you

1:04:51
create your first yaml compos file it's not that hard is it it's not that easy either this is your first time but trust

1:04:59
me you will get better but this is a yaml file for already a pretty big application with three separate Services

1:05:06
you can try building your own that is much simpler and as a matter of fact we have already done that in the last

1:05:12
project where we have a really simple just a web service in here so now we have stepped up our game a bit and we're

1:05:19
doing it for a complicated app to show you the beauty of Docker composed f while watch so remember we're building

1:05:27
three different images and containers through one file and one command that's power of Docker compose and on top of

1:05:36
that we're using Docker compost file watch to automatically build and run these containers if we make any changes

1:05:44
to the application so let's open up our terminal CD into m- doer and run pseudo do Locker compose up and press

1:05:58
enter enter your password and see the magic happen it's going to run all the services one by one notice that first it

1:06:08
created our DB image and container then it's going to start working on the API and we can see that here and finally

1:06:16
it's going to move over to our web application exactly as we have specified in our yaml file so let's leave it do its thing there we

1:06:27
go after about a minute we can see that the process has finished by this long log file right here don't worry it's not

1:06:35
an error rather you can see that it successfully containerized all three different applications the DB the API

1:06:44
and the web and attach them together if we go back to Docker desktop we can see that right here if we go to Docker

1:06:53
desktop we can see that right here we have the mer Docker web mer doer API and we also have three different

1:07:03
containers under mer do right here DB API and web and we also have the specified volumes so now that we have

1:07:13
this running let's open up our browser and navigate to Local Host 5173 there we go we have a fully functional m applic

1:07:24
running on your device locally without you having to spin up the database the front end and the back end and inputting

1:07:32
all of these environment variables manually it just works that's the power of doer what we have here is a simple

1:07:41
application where you can share your favorite anime so go to share enter the name I'm going to do something like my

1:07:48
hero Academia you can also enter the link and you can also enter a descript deson finally click submit that's it if

1:07:57
you refresh you can notice that it stays there and this entry actually got added to our database before Docker we would

1:08:06
have to have two or three terminals open running frontend back in a database at the same time now it's just one command

1:08:13
and we have our app running in real time but now let's try to make some changes if I go right here and navigate to our

1:08:22
front end part of our application as that's the easiest to notice we can go to app jsx and right in our nav bar

1:08:30
let's try to add a new link by duplicating this one and say something like popular if we save it and go back and

1:08:40
reload nothing changes so how can we ensure that the updates happen automatically and in real time back in

1:08:49
our code we can open up a terminal and then split it to create a new new one alongside it there we can run the

1:08:57
command Pudo Docker compose watch we're finally getting to the watch part if you press enter and enter your password

1:09:07
you'll see that something will start to happening it looks like it's starting with the watch configuration so now if I

1:09:15
save this file right here with popular included go back to the browser and reload indeed popular is there and you

1:09:23
can see that if I save the file something happens here there's an update happening in real time so if I change it

1:09:30
save it and go back it's updated in real time now let's remove it and let's try to test whether this works for the back

1:09:40
end as well we can do a quick test by installing a simple package called colors. JS that's just mpmi colors and

1:09:49
it allows you to change the colors in your terminal with this we'll very easily be able to see whether the

1:09:55
package got installed or not so back in our code we can navigate to our package Json of the backend part and using our terminal we can

1:10:06
install the package so let's split the terminal one more time CD into backend and then let's run mpm install

1:10:15
or mpmi callers this is going to add it we can kill this terminal in the middle and immediately you can see that

1:10:24
something started happening on that watch part it looks like it's listening to it and rebuilding the entire

1:10:31
application with this project installed that's great let's also explore the code a bit right here in the index you can see that

1:10:41
we are enabling this colors package coming from colors and we are also logging it out in a rainbow of Coler

1:10:50
whenever we go to Local Host 8000 so back in our browser let's simply rigate to Local Host 8,000 we get a Hello World here but

1:11:01
we're more interested in this hello world here because this one means that the package got successfully installed

1:11:10
there we have it without a refresh rebuild or rerun our application works in real time with the help of Docker

1:11:19
compose watch now before we move on to the very interesting part part of this course which is dockerizing full stack

1:11:26
modern xgs applications let me show you another cool docker's new and cool feature when we create container images

1:11:35
for our applications we're essentially stacking layers of existing images and software components however some of

1:11:44
these layers or components might have security vulnerabilities making our containers and their applications

1:11:51
susceptible to attacks Dockers Scout is a tool that helps us be proactive about security it scans our container images

1:12:00
looks at old the layers and software pieces like building blocks inside them and creates a detailed list called a

1:12:08
software build of materials es bomb for short this list includes everything our container is made of then Docker Scout

1:12:16
checks the list against an always updated database of known vulnerabilities it's like having a continuously updated list of potential

1:12:24
weak points if it finds any it lets us know so we can fix them before deploying our application we can use Docker Scout

1:12:32
in different places like Docker desktop Docker Hub and even through commands in Docker command line interface if we go

1:12:40
back to Docker desktop you can see the docker Scout section right here on the left and from the drop down we can

1:12:46
decide on which image we want to analyze let's select the M Docker web latest as we just created it and see what it shows right now it says

1:12:56
zero vulnerabilities and let's view the packages and cves here you can get a complete report analysis of our image

1:13:04
luckily our application doesn't have any vulnerabilities it mentions all the things that we need from all the layers

1:13:12
and images that are related to it and a list of packages it's worth checking every time to ensure that we're not

1:13:18
shipping anything that is easy to break now let's address the elephant the room and that is how to dockerize a nextjs

1:13:27
application more specifically a full stack nextjs application and the short answer would be the same as what I've

1:13:35
taught you before in this course I went ahead and created a small full stack application using v.d this is vel's new component

1:13:46
generator and the starter source code for that application is below this course copy it pasted right here and

1:13:55
just rename the starter for just next Docker so for one last time in this course let's take this as a recap of how

1:14:04
to dockerize a full stack modern nextjs application first of all we're going to open up our terminal and navigate to

1:14:13
Next Docker then we're going to initialize the docker part of the application by running Docker in it in this case we can select node

1:14:25
version 20 is fine we're going to use mpm we don't want to use mpm run build for starting the server but we do want

1:14:35
to use mpm run Dev as that's how it is with nextjs applications and we want to listen on Port 3000 now as Docker CLI conveniently

1:14:46
tells us three files have been created the docker files the compos yaml and the readme docker MD all the files we need

1:14:54
to dockerize our application are ready now let's take a moment to review them and tailor them to our application let's

1:15:03
start with our Docker file here we have some comments to help us get started but at this point we don't really need them

1:15:11
so this is how you can define specific arguments to be used within your application for example they Define node

1:15:18
version so they can specify it in multiple places but as a matter of fact let's rewrite this on our own to fully

1:15:26
brush upon our knowledge of Docker file syntax we can start by inheriting from a specific image in this case we can start

1:15:35
from node as our application is going to be based off node feel free to provide a specific version or just leave it like

1:15:42
this then we want to set the working directory by saying work there SLA we want to copy the package Json and

1:15:51
package lock Json into the image by saying copy package everything. Json into slash then we want to run mpm

1:16:02
install we want to copy the rest of the source files into the image by saying copy dot dot we want to expose the 3,000

1:16:12
endpoint and finally we want to run mpm run Dev that's all there is to it of creating your Docker file capable of

1:16:22
dockerizing next s now let's also look into our compose yaml file in this case let's also rewrite it from

1:16:31
scratch first we can Define the version of our composed yaml file something like 3.8 in this case should do and just to

1:16:39
repeat it's not a version of Docker we're using it's a version of a specific yaml file Syntax for Docker so if we

1:16:47
using some newer syntax just figure out in which version they're supported next we Define Services we can call it something like

1:16:55
front end for the front end side and then we Define build where we have the context right here dot we're immediately

1:17:05
in there and Docker file is going to be called Docker file so in this build we're just pointing to the docker file

1:17:13
from where it's going to build out our image then we can Define the ports right here next to the build by saying Dash

1:17:23
3,000 mapped to 3,000 and then we want to use Docker compose to watch for the changes and rebuild the container we can do that by

1:17:33
going below the ports and then saying develop watch and then we provide what we want to watch for so which path in this case

1:17:43
we can do Dash path of/ package.json and then the command or the action in this case of what we want to do once it notices

1:17:56
the changes in that file in this case we want to rebuild our image we can also repeat the procedure with path

1:18:04
of/ next. config.js and it's going to be action rebuild we can do that also for the package lock Json so path is

1:18:16
something like slash package-lock dojon and ction rebuild and finally we can add a path for all the other files meaning simply dot where

1:18:31
we're going to do the target of app and an action of sync so this is going to make sure that we sync our container

1:18:40
with our host machine finally we can Define some environment variables right here below develop so environment in this specific

1:18:51
app I'm using Mong DB Atlas so we need to pass in the connection string I'm going to say DB URL and then I'm going to give you

1:19:01
access to this string you can also find it below in the course it's going to be this one right here and don't forget if

1:19:08
you were running a local instance of mongodb you would need to do something that looks like this where you define

1:19:14
the image you map the ports to the local mongodb Compass version Define the environment variables and then specify a

1:19:22
volume but in this case it's done for us automatically because we're just referring to the deployed mongodb Atlas

1:19:29
database finally we specify the volumes of tasked because our application is going to be about tasks and that's it

1:19:38
that's our compose yaml finally open up the terminal and you simply need to run pseudo Docker compose

1:19:48
up enter your password and and it's going to start building it it's going to start with the front end and soon you'll see a lot of

1:19:58
things that you see when building out your typical nextjs application it will start installing all of the packages and

1:20:04
everything needed to run our application locally and there we have it our application is not only dockerized but

1:20:11
live on Local Host 3000 let's open it up and test it out there we go now we can see that this is a typical to-do

1:20:20
application where we have some registered tasks we can see the task right here we have one task to learn

1:20:26
Docker right here and thankfully you'll be able to take that box off once you finish watching this video and we can

1:20:33
also create a new task now I purposefully left this typo right here in registered to check whether we can

1:20:41
fix it within our code what do you think will it work or not so if we go to search and search for registered you can see it right here on

1:20:52
top top it's actually being mentioned two times so if we change it and spell it properly which is registered and go back to our

1:21:03
application it didn't work our Docker wasn't watching for changes unfortunately we forgot to tell Docker to watch for

1:21:13
changes but thankfully you know how to do so simply open up the terminal split it and run sud sudo Docker compose

1:21:25
watch enter the password it started doing its thing and it looks like it's listening for changes now we have made the changes

1:21:35
already so let's simply press command or contrl S to save them and as soon as you do that you'll see syncing front end after changes were

1:21:45
detected going back through application and reloading you can see that the typo has indeed been fixed

1:21:53
so there you have it you just learned how to dockerize the most modern web application there is a full stack nextjs

1:22:00
application but with that you've also went through the process of dockerizing a simple vanilla JS script to doing

1:22:07
something like V react MN and then next as well not only have you learned all of the most important Docker Concepts you

1:22:17
have put them to use in five different kinds of applications you've learned learned how to build images using the

1:22:25
docker file you've learned how to use Docker compose and create compose yaml files and with that compose run as many

1:22:34
services as you want with a single command you've also learned how to listen for changes in your applications so in a nutshell you've

1:22:44
learned how to dockerize any application you can build and finally let's discuss the elephant in the room should should

1:22:52
you or should you not dockerize your specific application in my opinion it's worth considering dockerization for any

1:23:00
application be it front-end backend or full stack let me tell you why if you have big and complex apps they usually

1:23:09
have many moving Parts like databases servers and apis Docker packages everything an app needs into a

1:23:17
standardized unit or a container making it easier to manage IM imagine having a large e-commerce platform with a web

1:23:25
server a database and multiple apis for payment order processing and inventory management docar rizing each component

1:23:34
ensures that they work together seamlessly and can be easily deployed or scaled as needed similarly if you have

1:23:41
an app built from many small pieces or microservices which involves breaking an app into small independent features

1:23:49
Docker containers are perfect for isolating and managing these Services separately for example if you're

1:23:56
building a social media application you may have separate micro services for user authentication posting content

1:24:04
handling notifications and managing connections dockerizing each microservice allows independent development testing and scaling of these

1:24:13
services without affecting the entire application another reason to dockerize any app is that it just works everywhere

1:24:22
our development team at JSM uses different operating systems Windows Mac OS and Linux and without Docker setting

1:24:30
up the development environment on each machine can lead to inconsistencies Docker ensures that every developer regardless of their

1:24:39
operating system works in the same containerized environment minimizing compatibility issues if that's what you're looking for

1:24:47
similar to Uber you can dockerize your app and reduce the development hassle Docker also allows for easy scaling

1:24:56
using Docker makes it simple to handle more users how well imagine you're running a popular online streaming

1:25:03
service as more users sign up you need to scale your video transcoding service Docker allows you to easily replicate

1:25:11
and deploy additional transcoding containers ensuring smooth scaling without disrupting the entire application and with Docker updates

1:25:20
happen smoothly imagine imagine you manage a web application with frequent updates without Docker deploying updates

1:25:27
might require manually adjusting configurations in the server which takes time and will most likely break your app

1:25:34
with Docker you can update your app consistently without worrying about breaking dependencies ensuring that

1:25:41
changes go live smoothly Docker also simplifies steamwork because it provides a consistent environment for all

1:25:48
Developers for example if you're working on a machine learning project Docker ensures that every team member

1:25:55
regardless of their local setup works with the same environment containing the necessary libraries dependencies and

1:26:01
configurations everyone works in the same containerized setup reducing compatibility issues and making

1:26:07
collaboration that much smoother and finally old apps new tricks even for older applications Docker can breathe a

1:26:17
new life it helps in managing dependencies isolating the application and making it more compatible with

1:26:23
modern systems imagine you're working on a big Tech that is using a big scary Legacy monolitic application written in

1:26:31
an older programming language or version dockerizing that application allows you to isolate the application and its

1:26:38
dependencies making it easier to maintain from your environment where you might be using the latest versions of

1:26:44
runtimes or languages almost every company uses dockerized applications whether we're dealing with a small or

1:26:51
big big application Docker can help solve problems or stop them from happening in the first place so no

1:26:58
matter what kind of app you're working on using Docker has become a smart move to make things smoother and avoid issues

1:27:06
and congratulations I truly do mean it you've just learned Docker an in demand engineering tool as a thank you for

1:27:13
making it this far for committing to learning and becoming a better developer I want to give you a reward I'm holding

1:27:20
a Docker swag giveaway where we'll give away some special merch to Dedicated developers that came to the end of the

1:27:27
course to learn more and take part just click the link in the description winners will be notified by

1:27:33
email and if you reach this point you've done something that only few developers do you can now confidently talk about

1:27:41
Docker its main Concepts and best practices and most importantly you can dockerize any modern front-end backend

1:27:49
and full stack app I'm proud of you
