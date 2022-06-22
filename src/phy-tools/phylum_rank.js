import './phylum_rank.css';
// import JSONData from "./data.json";
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


class PhylumRank extends React.Component{

	constructor(props) {
		super(props);
		this.state = { taxonomy: [] }
	}
  
	componentDidMount() {
		let taxonomy = [];
		//http://bioinfo.icb.ufmg.br/taxallnomy/
		fetch('http://bioinfo.icb.ufmg.br/cgi-bin/taxallnomy/taxallnomy_multi.pl?txid=1763&rank=main&format=json')
		.then(response => response.json())
		.then(data => {
			this.setState({ taxonomy: data })
		})
	}
  
	//SPACESHIPP WHOOHOOO
	render() {

		//const fileJson = JSONData;
		//const name = Object.keys(fileJson)
		//const taxData = JSONData[name]
		//console.log("hello")

		var thing = this.state.taxonomy
		var heirarchy = [];
		for (var key in thing) {
			// skip loop if the property is from prototype
			if (!thing.hasOwnProperty(key)) continue;

			var obj = thing[key];
			for (var prop in obj) {
				// skip loop if the property is from prototype
				if (!obj.hasOwnProperty(prop)) continue;

				// your code
				heirarchy.push(obj[prop]);
			}
		}

		return (
			<div>

				<div class='title'>
					<h1>Taxonomic Name</h1>
				</div>

				<Accordion allowZeroExpanded>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								<strong>Kingdom:</strong> {heirarchy[6]}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<Accordion allowZeroExpanded>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											<strong>Phylum:</strong> {heirarchy[4]}
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<Accordion allowZeroExpanded>
											<AccordionItem>
												<AccordionItemHeading>
													<AccordionItemButton>
														<strong>Class:</strong> {heirarchy[3]}
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<Accordion allowZeroExpanded>
														<AccordionItem>
															<AccordionItemHeading>
																<AccordionItemButton>
																	<strong>Order:</strong> {heirarchy[0]}
																</AccordionItemButton>
															</AccordionItemHeading>
															<AccordionItemPanel>
																<Accordion allowZeroExpanded>
																	<AccordionItem>
																		<AccordionItemHeading>
																			<AccordionItemButton>														
																				<strong>Family:</strong> {heirarchy[5]}
																			</AccordionItemButton>
																		</AccordionItemHeading>
																		<AccordionItemPanel>
																			<Accordion allowZeroExpanded>
																				<AccordionItem>
																					<AccordionItemHeading>
																						<AccordionItemButton>
																							<strong>Genus:</strong> <i>{heirarchy[1]}</i>
																						</AccordionItemButton>
																					</AccordionItemHeading>

																					<AccordionItemPanel>
																						<Accordion allowZeroExpanded >
																							<AccordionItem>
																								<AccordionItemHeading>
																									<AccordionItemButton>
																										<strong>Species:</strong> <i>{heirarchy[2]}</i>
																									</AccordionItemButton>
																								</AccordionItemHeading>
																							</AccordionItem>
																						</Accordion>
																					</AccordionItemPanel>
																				</AccordionItem>
																			</Accordion>
																		</AccordionItemPanel>
																	</AccordionItem>
																</Accordion>
															</AccordionItemPanel>
														</AccordionItem>
													</Accordion>
												</AccordionItemPanel>
											</AccordionItem>
										</Accordion>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>

			</div>
		);
	}

}

export default PhylumRank;