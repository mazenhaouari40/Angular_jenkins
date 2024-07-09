pipeline {
    agent any
    tools { nodejs 'NODEJS' }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run ng build'
            }
        }
        stage('Serve') {
            steps {
              
                bat 'npm run ng serve '
                echo 'Now...'
                echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'

                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                
                    // Demander à l'utilisateur s'il a terminé d'utiliser le site web
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'

                    // Lire le contenu du fichier .pidfile dans une variable
                    bat '''
                    set /p PID=<.pidfile
                    REM Terminer le processus avec le PID lu
                    taskkill /PID %PID%
                    '''
            }
        }
    }
}
