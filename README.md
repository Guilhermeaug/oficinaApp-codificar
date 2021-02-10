# oficinaApp-codificar

Aplicativo que exibe os dados de transações comerciais de uma oficina. Feito utilizando o framework React native com o objetivo de criar um codigo fonte aplicável para qualquer dispositivo móvel.

# Divisões do aplicativo

O aplicativo possui uma função de renderização principal e foi criada uma pasta para os componentes utilizados na visualização dos dados recolhidos via API externa. Desta forma, existe um componente 'Proposal' que recebe os dados de uma transação e o componente 'DescriptionModal', que recebe as propriedades necessárias para aparecer na tela apenas no momento correto e os dados da transação que foi pressionada no momento, para que possa ser exibida a sua descrição.

Também há uma folha de estilo, utilizada para personalizar a aparência dos componentes e sua disposição na tela.

Durante a construção do aplicativo, recorri sempre a documentação oficial do framework (https://reactnative.dev/docs/getting-started), com o objetivo de tirar dúvidas sobre o mesmo e aprender as melhores técnicas de utilização.

# Executando o aplicativo

Para executar o aplicativo, baixe a pasta neste repositório e extraia o arquivo no local desejado. Após isso, abra um terminal de comando na pasta principal e execute o comando 'npm start' ou 'yarn start', dependendo do instalador de dependências instalado na sua máquina.

O software foi contruído utlizando a plataforma Expo. Desse modo, certifique-se de ter instalado as dependências do mesmo. Caso não possua, basta executar o comando 'npm install expo' ou 'yarn add expo'. Em caso de problemas, verifique o site: https://docs.expo.io/

Após isso, uma aba será aberta no browser e basta executar um emulador da sua escolha ou utilizar o próprio smartphone via QR CODE.

