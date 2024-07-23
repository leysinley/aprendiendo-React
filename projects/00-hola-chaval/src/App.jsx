import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <>
            <TwitterFollowCard isFollowing username="leyvenividiici" name="Álvaro Ley" />
            <TwitterFollowCard isFollowing={false} username="kay76ers" name="Carlos Pintado" />
        </>
    )
}