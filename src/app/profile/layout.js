export default function ProfileLayout({children}){
    return(
        <div><h1>This is Profile Header</h1>
        {children}
        <h1>This Profile footer</h1>
        </div>
    )
}