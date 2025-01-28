import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard'

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export interface IStartupCard {
  _createdAt: Date
  views: number
  author: { _id: number, name: string }
  _id: number
  description: string
  image: string
  category: string
  title: string
}

export default async function Home({searchParams}: Props) {
  const query = (await searchParams)?.query

  const posts: IStartupCard[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: 'Adrien'},
      _id: 1,
      description: 'This is description',
      image: 'https://i.postimg.cc/TP6GGQn3/20250128-104749.jpg',
      category: 'Robots',
      title: 'We Robots'
    }
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search result "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length && posts?.map(
              (post: IStartupCard) => (<StartupCard key={post._id} post={post} />)
            )
          }

          {!posts?.length && (<p className="no-results">No startups found</p>)}
        </ul>
      </section>
    </>
  );
}
