export default class extends React.Component {
    render() {
        return <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <img src="/static/autumn.jpg" alt="imagen"/>
            <p>hola mundo</p>
            <style jsx>{`
                img {
                    width: 200px;
                    
                    display: block;
                    text-align: center;

                    margin: auto
                }
                p {
                    maring: 0 auto;
                    color: red;
                    text-align: center;
                }
            `}</style>
            
        </div>
    }
}