# Jesus Collective Mobile App
The instructions below will setup a local environment using the TMH AWS Development backend. For almost all development this should be sufficient.

There are two other optional ways to develop using your own backend...

1) Using a local "mocked" backend (see below: amplify mock)
2) Using your own AWS backend (see below: setup aws)

Optional Install Steps
---
1. Setup a free AWS account. Optional - only for backend work
2. Install Visual Code (code.visualstudio.com) - optionally use whatever editor you like

Setup Github for delivering code
---
1. Ensure you have a github.com account
2. Ask George to give you access to submit code

Install (for windows replace ~ with c:\)
---
1. Install the latest version of Node/NPM (www.nodejs.org)
2. Install git (www.git-scm.com) - on mac just open terminal and type git and follow the prompts
3. Clone the repo - from terminal on a linux machine

```
mkdir ~/code
mkdir ~/code/jc
cd ~/code/jc
git clone https://github.com/jesus-collective/mobile.git
# be sure to login using your github credentials
```

4. Install packages - from terminal on a linux machine:
```
cd ~/code/jc/mobile
npm install
```
    
5. To Run - from terminal on a linux machine:
```
cd ~/code/jc/mobile
npm start
# Press w (web), i (ios), a (android) to start the appropriate client
```

6. To Test - from terminal on a linux machine:

```
cd ~/code/jc/mobile
npm test
```

7. Optionally - local backend:
```
npm install -g @aws-amplify/cli
cd ~/code/jc/mobile
amplify mock
```    

8. Optionally - to setup AWS backend run:

*** warning - aws offers a free tier, due to some features that are enabled by default this will result in overages and AWS will bill you ***

*** to reduce overages we suggest removing the EC2 elastic search instances that are created ***

*** even with this, you will likely go over some free limits and be billed...you are responsible for setting limits and monitoring your own account ***

```
npm install -g @aws-amplify/cli
cd ~/code/jc/mobile
amplify configure
amplify push
amplify publish -c
```    

To create deployment packages run:
```
cd ~/code/jc/mobile
npm run-script buildExpo
# Download the resulting files.
# Upload the files to the Apple or Google Play store.
```
