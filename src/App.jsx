import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
      width: 300,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app flex items-center flex-col bg-[#04364A] h-screen">
			<h1 className='text-5xl font-bold text-white mt-[10vh] mb-[5vh]'>QR Generator</h1>
			<input 
        className='px-4 py-2 rounded-xl'
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button 
      className='bg-white hover:bg-[#DAFFFB] hover:text-[#04364A]  px-4 py-2 mt-8 mb-8 rounded-xl font-bold text-lg'
      onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img
          className='' 
           src={qr} />
				<button className='bg-white hover:bg-[#DAFFFB] hover:text-[#04364A] px-4 py-2 mt-4 rounded-xl'>
          <a href={qr} className='text-lg font-bold' download="qrcode.png">Download</a>
        </button>
			</>}
		</div>
	)
}

export default App