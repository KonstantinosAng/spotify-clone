import React from 'react'

function SearchResult({ data }) {
	return (
		<div className="w-full flex flex-col my-2">
			{data.map(item => (
				<div className="flex items-end my-2 hover:bg-black cursor-pointer" key={item?.id}>
					<img className="w-24 object-contain ml-2 mr-5 shadow-xl" alt={item?.name} src={item?.type !== 'track' ? item?.images[0]?.url : item?.album?.images[0]?.url}/>
					<div>
						<h4 className="font-bold text-lg"> {(item?.type==='album' || item?.type==='track') && item?.artists[0]?.name} </h4>
						{item?.type === 'album' || item?.type === 'track' ? (
							<p className="text-sm lg:text-lg"> {item?.name} </p>
						) : (
							<>
							<h4 className="font-bold text-md lg:text-2xl"> {item?.name} </h4>
							{item?.type === 'artist' && (
								<div className="flex flex-wrap space-x-2">
									{item?.genres?.map(genre => (
										<p key={genre} className="text-sm text-green-500 border flex items-center text-center solid border-gray-600 px-2 py-1 my-1 rounded-lg"> {genre} </p>
									))}
								</div>
							)}
							{item?.type === 'playlist' && (
								<p className="text-sm text-green-500 rounded-lg"> {item?.description} </p>
							)}
						</>
					)}
					</div>
				</div>
			))}
		</div>
	)
}

export default SearchResult
