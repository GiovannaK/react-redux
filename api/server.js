const app = require('./src/index');

const PORT = app.get('PORT')

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))